import { apiSlice } from "../api/apiSlice";

export const packageApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPackages: builder.query({
      query: () => `/api/packages/`,
      providesTags: ["getPackages"],
    }),
    createPackage: builder.mutation({
      query: (data) => ({
        url: `/api/packages/create-package`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["getPackages"],
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
  useCreatePackageMutation,
  useDeletePackageMutation,
} = packageApi;
