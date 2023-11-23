import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "../auth/authSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsersManagers: builder.query({
      query: (role) => `/api/users/get-users-managers/${role}`,
      providesTags: ["getUsersManagers"],
    }),
    updateProfile: builder.mutation({
      query: (data) => ({
        url: `/api/users/update-profile`,
        method: "PUT",
        body: data,
      }),
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
              user: result?.data,
            })
          );

          // // dispatch userLoggedIn action
          dispatch(
            userLoggedIn({
              accessToken: auth?.accessToken,
              user: result?.data,
            })
          );
        } catch (err) {
          // do nothing
          console.log(err);
        }
      },
    }),
  }),
});

export const { useGetUsersManagersQuery, useUpdateProfileMutation } = userApi;
