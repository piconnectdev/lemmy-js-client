import {
  ListingType,
  PostFeatureType,
  SiteMetadata,
  SortType,
} from "../others";
import {
  CommunityModeratorView,
  CommunityView,
  PostReportView,
  PostView,
} from "../views";

export interface CreatePost {
  name: string;
  url?: string;
  body?: string;
  nsfw?: boolean;
  language_id?: number;
  community_id: string;
  honeypot?: string;
  auth: string;
}

export interface PostResponse {
  post_view: PostView;
}

export interface GetPost {
  id?: string;
  comment_id?: string;
  auth?: string;
}

export interface GetPostResponse {
  post_view: PostView;
  community_view: CommunityView;
  moderators: CommunityModeratorView[];
  online: number;
}

export interface GetPosts {
  type_?: ListingType;
  sort?: SortType;
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
  language_id?: number;
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
 * Marks a post as read.
 */
export interface MarkPostAsRead {
  post_id: string;
  read: boolean;
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
 * Only admins and mods can feature a community post.
 */
export interface FeaturePost {
  post_id: string;
  featured: boolean;
  feature_type: PostFeatureType;
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

export interface PostReportResponse {
  post_report_view: PostReportView;
}

export interface ResolvePostReport {
  report_id: string;
  /**
   * Either resolve or unresolve a report.
   */
  resolved: boolean;
  auth: string;
}

export interface ListPostReports {
  page?: number;
  limit?: number;
  /**
   * if no community is given, it returns reports for all communities moderated by the auth user.
   */
  community_id?: string;
  /**
   * Only shows the unresolved reports.
   */
  unresolved_only?: boolean;
  auth: string;
}

export interface ListPostReportsResponse {
  post_reports: PostReportView[];
}

export interface GetSiteMetadata {
  url: string;
}

export interface GetSiteMetadataResponse {
  metadata: SiteMetadata;
}
