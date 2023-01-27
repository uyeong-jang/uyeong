import { api } from '../api';

export interface BlogComment {
  _id: string;
  user_id: string;
  content: string;
  post_title: string;
  createdAt: string;
}

export interface BlogCommentRes {
  comments: BlogComment[];
  count: number;
  msg?: string;
}

export interface BlogCommenReq {
  user_id?: string;
  post_title: string;
  content: string;
}

export interface BlogCommenReqWithToken {
  commentsInfo: BlogCommenReq;
  token?: string;
}

export const categoryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    //getMany
    getBlogComments: builder.query<BlogCommentRes, string>({
      query: (slug) => ({
        url: `/api/comment/blog/${slug}`,
        method: 'get',
      }),
      providesTags: ['BlogComment'],
    }),

    //create
    createBlogComment: builder.mutation<BlogCommentRes, BlogCommenReqWithToken>({
      query: (data) => ({
        url: '/api/comment',
        method: 'post',
        data: data.commentsInfo,
        headers: {
          Authorization: data.token,
        },
      }),
      invalidatesTags: ['BlogComment'],
    }),

    //update
    updateBlogComment: builder.mutation<BlogCommentRes, BlogCommenReqWithToken>({
      query: (data) => ({
        url: `/api/comment/${data.commentsInfo.user_id}`,
        method: 'patch',
        data: data.commentsInfo,
        headers: {
          Authorization: data.token,
        },
      }),
      invalidatesTags: ['BlogComment'],
    }),

    //delete
    deleteBlogComment: builder.mutation<BlogCommentRes, BlogCommenReqWithToken>({
      query: (data) => ({
        url: `/api/comment/${data.commentsInfo.user_id}`,
        method: 'delete',
        data: data.commentsInfo,
        headers: {
          Authorization: data.token,
        },
      }),
      invalidatesTags: ['BlogComment'],
    }),
  }),
});

// export hooks for usage in functional components
export const {
  useGetBlogCommentsQuery,
  useCreateBlogCommentMutation,
  useUpdateBlogCommentMutation,
  useDeleteBlogCommentMutation,
} = categoryApi;

// export endpoints for use in SSR
export const { getBlogComments } = categoryApi.endpoints;
