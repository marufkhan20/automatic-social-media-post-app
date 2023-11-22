import { apiSlice } from "../api/apiSlice";

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
    }),
  }),
});

export const { useGetUsersManagersQuery, useUpdateProfileMutation } = userApi;
