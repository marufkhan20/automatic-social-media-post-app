import { apiSlice } from "../api/apiSlice";

export const settingApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSetting: builder.query({
      query: () => `/api/settings`,
    }),
    getActivities: builder.query({
      query: () => `/api/settings/activities`,
    }),
    createAndUpdateSetting: builder.mutation({
      query: (data) => ({
        url: "/api/settings/create-and-update",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetSettingQuery,
  useGetActivitiesQuery,
  useCreateAndUpdateSettingMutation,
} = settingApi;
