import { apiSlice } from "../api/apiSlice";

export const templateApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSingleTemplate: builder.query({
      query: (id) => `/api/templates/single-template/${id}`,
      providesTags: ["getTemplate"],
    }),
    getTemplates: builder.query({
      query: ({ type, team, user }) =>
        `/api/templates/all-templates/${type}/${team}/${user}`,
      providesTags: ["getTemplates"],
    }),
    getTemplateFolders: builder.query({
      query: ({ type, team, user }) =>
        `/api/templates/all-templates-folders/${type}/${team}/${user}`,
      providesTags: ["getTemplateFolders"],
    }),
    createTemplateFolder: builder.mutation({
      query: (data) => ({
        url: `/api/templates/create-folder`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["getTemplateFolders", "getTemplates"],
    }),
    createTemplate: builder.mutation({
      query: (data) => ({
        url: `/api/templates/create-template`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [
        "getTemplateFolders",
        "getTemplates",
        "getTeamTemplates",
      ],
    }),
    importTemplate: builder.mutation({
      query: (data) => ({
        url: `/api/templates/import-template`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["getTemplateFolders", "getTemplates"],
    }),
    moveToTemplateFolder: builder.mutation({
      query: ({ id, folderId }) => ({
        url: `/api/templates/move-to-template-folder/${id}/${folderId}`,
        method: "PUT",
      }),
      invalidatesTags: ["getTemplateFolders", "getTemplates"],
    }),
    dublicateTemplate: builder.mutation({
      query: (data) => ({
        url: `/api/templates/dublicate-template`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["getTemplateFolders", "getTemplates"],
    }),
    deleteTemplate: builder.mutation({
      query: (id) => ({
        url: `/api/templates/delete-template/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["getTemplateFolders", "getTemplates"],
    }),
  }),
});

export const {
  useGetSingleTemplateQuery,
  useGetTemplatesQuery,
  useGetTemplateFoldersQuery,
  useCreateTemplateMutation,
  useCreateTemplateFolderMutation,
  useMoveToTemplateFolderMutation,
  useImportTemplateMutation,
  useDublicateTemplateMutation,
  useDeleteTemplateMutation,
} = templateApi;
