import { SiteMetadata } from '..';
import {
  CommunityView,
  CommentView,
  CommunityModeratorView,
  PostReportView,
  PostView,
} from '../views';

export interface CreatePost {
  name: string;
  url?: string;
  body?: string;
  nsfw?: boolean;
  community_id: string;
  auth: string;
}

export interface PostResponse {
  post_view: PostView;
}

export interface GetPost {
  id: string;
  auth?: string;
}

export interface GetPostResponse {
  post_view: PostView;
  community_view: CommunityView;
  comments: CommentView[];
  moderators: CommunityModeratorView[];
  online: number;
}

export interface GetPosts {
  /**
   * The [[ListingType]].
   *
   * Post listing types are `All, Subscribed, Community`
   */
  type_?: string;
  /**
   * The [[SortType]].
   */
  sort?: string;
  page?: number;
  limit?: number;
  community_id?: string;
  /**
   * To get posts for a federated community by name, use `name@instance.tld` .
   */
  community_name?: string;
  saved_only?: boolean;
  auth?: string;
}

export interface GetPostsResponse {
  posts: PostView[];
}

export interface CreatePostLike {
  post_id: string;
  /**
   * `score` can be 0, -1, or 1. Anything else will be rejected.
  */
  score: number;
  auth: string;
}

export interface EditPost {
  post_id: string;
  name?: string;
  url?: string;
  body?: string;
  nsfw?: boolean;
  auth: string;
}

export interface DeletePost {
  post_id: string;
  deleted: boolean;
  auth: string;
}

/**
 * Only admins and mods can remove a post.
 */
export interface RemovePost {
  post_id: string;
  removed: boolean;
  reason?: string;
  auth: string;
}

/**
 * Only admins and mods can lock a post.
 */
export interface LockPost {
  post_id: string;
  locked: boolean;
  auth: string;
}

/**
 * Only admins and mods can sticky a post.
 */
export interface StickyPost {
  post_id: string;
  stickied: boolean;
  auth: string;
}

export interface SavePost {
  post_id: string;
  save: boolean;
  auth: string;
}

export interface CreatePostReport {
  post_id: string;
  reason: string;
  auth: string;
}

export interface CreatePostReportResponse {
  success: boolean;
}

export interface ResolvePostReport {
  report_id: string;
  resolved: boolean;
  auth: string;
}

export interface ResolvePostReportResponse {
  report_id: string;
  resolved: boolean;
}

export interface ListPostReports {
  page?: number;
  limit?: number;
  community?: string;
  auth: string;
}

export interface ListPostReportsResponse {
  posts: PostReportView[];
}

export interface GetSiteMetadata {
  url: string;
}

export interface GetSiteMetadataResponse {
  metadata: SiteMetadata;
}
