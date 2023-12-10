import { apiSlice } from "../api/apiSlice";

export const dashboardApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardInfo: builder.query({
      query: () => `/api/dashboard`,
    }),
    getDocumentation: builder.query({
      query: () => `/api/dashboard/get-documentation`,
      providesTags: ["getDocumentation"],
    }),
    generateReport: builder.mutation({
      query: (data) => ({
        url: `/api/dashboard/generate-report`,
        method: "POST",
        body: data,
      }),
    }),
    writeDocumentation: builder.mutation({
      query: (data) => ({
        url: `/api/dashboard/write-documentation`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["getDocumentation"],
    }),
  }),
});

export const {
  useGetDashboardInfoQuery,
  useGetDocumentationQuery,
  useGenerateReportMutation,
  useWriteDocumentationMutation,
} = dashboardApi;
