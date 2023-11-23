import { apiSlice } from "../api/apiSlice";

export const templateApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSingleTemplate: builder.query({
      query: (id) => `/api/templates/single-template/${id}`,
    }),
    getTemplates: builder.query({
      query: (type) => `/api/templates/all-templates/${type}`,
      providesTags: ["getTemplates"],
    }),
    getTemplateFolders: builder.query({
      query: (type) => `/api/templates/all-templates-folders/${type}`,
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
      invalidatesTags: ["getTemplateFolders", "getTemplates"],
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
      query: ({ id, folderId, data }) => ({
        url: `/api/templates/move-to-template-folder/${id}/${folderId}`,
        method: "PUT",
        body: data,
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
  useImportTemplateMutation,
  useDublicateTemplateMutation,
  useDeleteTemplateMutation,
} = templateApi;
