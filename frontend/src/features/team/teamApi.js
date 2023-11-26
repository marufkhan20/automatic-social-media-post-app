import { apiSlice } from "../api/apiSlice";

export const teamApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSingleTeam: builder.query({
      query: (id) => `/api/teams/single-team/${id}`,
    }),
    getJoinedTeams: builder.query({
      query: () => `/api/teams/joined-teams`,
      providesTags: ["getJoinedTeams"],
    }),
    getTeamTemplates: builder.query({
      query: ({ id, type }) => `/api/teams/team-templates/${id}/${type}`,
      providesTags: ["getTeamTemplates"],
    }),
    getTeamGalleries: builder.query({
      query: ({ id, type }) => `/api/teams/team-galleries/${id}/${type}`,
      providesTags: ["getTeamGalleries"],
    }),
    getPendingMembers: builder.query({
      query: (id) => `/api/teams/pending-member/${id}`,
    }),
    joinTeam: builder.mutation({
      query: (code) => ({
        url: `/api/teams/join-team/${code}`,
        method: "PUT",
      }),
    }),
    approveMember: builder.mutation({
      query: ({ id, memberId }) => ({
        url: `/api/teams/approve-team-member/${id}`,
        method: "PUT",
        body: { memberId },
      }),
    }),
    createTeam: builder.mutation({
      query: (data) => ({
        url: `/api/teams/create-team`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["getJoinedTeams"],
    }),
    leaveTeam: builder.mutation({
      query: (id) => ({
        url: `/api/teams/leave-team/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["getJoinedTeams"],
    }),
    updateTeam: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/teams/update-team/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/api/teams/delete-team/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["getJoinedTeams"],
    }),
  }),
});

export const {
  useGetSingleTeamQuery,
  useGetJoinedTeamsQuery,
  useGetTeamTemplatesQuery,
  useGetTeamGalleriesQuery,
  useGetPendingMembersQuery,
  useJoinTeamMutation,
  useApproveMemberMutation,
  useCreateTeamMutation,
  useLeaveTeamMutation,
  useUpdateTeamMutation,
  useDeletePostMutation,
} = teamApi;
