import { CommentReportView, CommentView } from '../views';

export interface CreateComment {
  content: string;
  parent_id?: string;
  post_id: string;
  form_id?: string; // An optional front end ID, to tell which is coming back
  auth: string;
}

export interface EditComment {
  content: string;
  comment_id: string;
  form_id?: string;
  auth: string;
}

/**
 * Only the creator can delete the comment.
 */
export interface DeleteComment {
  comment_id: string;
  deleted: boolean;
  auth: string;
}

/**
 * Only a mod or admin can remove the comment.
 */
export interface RemoveComment {
  comment_id: string;
  removed: boolean;
  reason?: string;
  auth: string;
}

/**
 * Only the recipient can do this.
 */
export interface MarkCommentAsRead {
  comment_id: string;
  read: boolean;
  auth: string;
}

export interface SaveComment {
  comment_id: string;
  save: boolean;
  auth: string;
}

export interface CommentResponse {
  comment_view: CommentView;
  recipient_ids: string[];
  form_id?: string; // An optional front end ID, to tell which is coming back
}

export interface CreateCommentLike {
  comment_id: string;
  score: number;
  auth: string;
}

/**
 * Comment listing types are `All, Subscribed, Community`
 *
 * `community_name` can only be used for local communities. To get posts for a federated community, pass `community_id` instead.
 */
export interface GetComments {
  type_?: string;
  sort?: string;
  page?: number;
  limit?: number;
  community_id?: string;
  community_name?: string;
  saved_only?: boolean;
  auth?: string;
}

export interface GetCommentsResponse {
  comments: CommentView[];
}

export interface CreateCommentReport {
  comment_id: string;
  reason: string;
  auth: string;
}

export interface CreateCommentReportResponse {
  success: boolean;
}

export interface ResolveCommentReport {
  report_id: number;
  resolved: boolean;
  auth: string;
}

export interface ResolveCommentReportResponse {
  // TODO this should probably return the view
  report_id: number;
  resolved: boolean;
}

export interface ListCommentReports {
  page?: number;
  limit?: number;
  // if no community is given, it returns reports for all communities moderated by the auth user
  community?: string;
  auth: string;
}

export interface ListCommentReportsResponse {
  comments: CommentReportView[];
}
