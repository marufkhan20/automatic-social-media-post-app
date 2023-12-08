import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "../auth/authSlice";

export const packageApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPackages: builder.query({
      query: () => `/api/packages/`,
      providesTags: ["getPackages"],
    }),
    getSubscriptions: builder.query({
      query: () => `/api/packages/all-subscriptions`,
      providesTags: ["getSubscriptions"],
    }),
    getSubscriptionsByUser: builder.query({
      query: () => `/api/packages/all-subscriptions-by-user`,
      providesTags: ["getSubscriptions"],
    }),
    createPackage: builder.mutation({
      query: (data) => ({
        url: `/api/packages/create-package`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["getPackages"],
    }),
    subscribePackage: builder.mutation({
      query: (data) => ({
        url: `/api/packages/subscribe-package`,
        method: "POST",
        body: data,
      }),
    }),
    updateSubscriptionPlan: builder.mutation({
      query: (data) => ({
        url: `/api/packages/update-subscription-plan`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["getSubscriptions"],
      onQueryStarted: async (args, { queryFulfilled, dispatch }) => {
        try {
          const result = await queryFulfilled;

          // get item
          let auth = localStorage.getItem("auth");
          auth = JSON.parse(auth);

          // // set data in localstorage
          localStorage.setItem(
            "auth",
            JSON.stringify({
              accessToken: auth?.accessToken,
              user: {
                ...auth?.user,
                plan: result?.data?.user?.plan,
                refreshDate: result?.data?.user?.refreshDate,
              },
            })
          );

          // // dispatch userLoggedIn action
          dispatch(
            userLoggedIn({
              accessToken: auth?.accessToken,
              user: result?.data?.user,
            })
          );
        } catch (err) {
          // do nothing
          console.log(err);
        }
      },
    }),
    deletePackage: builder.mutation({
      query: (id) => ({
        url: `/api/packages/delete-package/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["getPackages"],
    }),
  }),
});

export const {
  useGetPackagesQuery,
  useGetSubscriptionsQuery,
  useGetSubscriptionsByUserQuery,
  useCreatePackageMutation,
  useDeletePackageMutation,
  useSubscribePackageMutation,
  useUpdateSubscriptionPlanMutation,
} = packageApi;
