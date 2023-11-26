import { apiSlice } from "../api/apiSlice";

export const postApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSinglePost: builder.query({
      query: (id) => `/api/posts/single-post/${id}`,
    }),
    getPosts: builder.query({
      query: (type) => `/api/posts/all-posts/${type}`,
      providesTags: ["getPosts"],
    }),
    createPost: builder.mutation({
      query: (data) => ({
        url: `/api/posts/create-post`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["getPosts", "getTemplate"],
    }),
    dublicatePost: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/posts/dublicate-post/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["getPosts"],
    }),
    reschedulePost: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/posts/reschedule-post/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["getPosts"],
    }),
    updatePost: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/posts/update-post/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["getPosts"],
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/api/posts/delete-post/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["getPosts"],
    }),
  }),
});

export const {
  useGetSinglePostQuery,
  useGetPostsQuery,
  useCreatePostMutation,
  useDublicatePostMutation,
  useReschedulePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postApi;
