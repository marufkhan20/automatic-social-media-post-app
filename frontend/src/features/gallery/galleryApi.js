import { apiSlice } from "../api/apiSlice";

export const galleryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getGalleries: builder.query({
      query: (type) => `/api/galleries/${type}`,
      providesTags: ["getGalleries"],
    }),
    createGallery: builder.mutation({
      query: (data) => ({
        url: `/api/galleries/create-gallery`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["getGalleries", "getTeamGalleries"],
    }),
    uploadFile: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/galleries/upload-file/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["getGalleries"],
    }),
  }),
});

export const {
  useGetGalleriesQuery,
  useCreateGalleryMutation,
  useUploadFileMutation,
} = galleryApi;
