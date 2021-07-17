export interface LocalUserSettings {
  id: number;
  person_id: string;
  email?: string;
  show_nsfw: boolean;
  theme: string;
  default_sort_type: number;
  default_listing_type: number;
  lang: string;
  show_avatars: boolean;
  send_notifications_to_email: boolean;
  show_bot_accounts: boolean;
  show_scores: boolean;
  show_read_posts: boolean;
}

export interface PersonSafe {
  id: string;
  name: string;
  display_name?: string;
  avatar?: string;
  banned: boolean;
  published: string;
  updated?: string;
  actor_id: string;
  bio?: string;
  local: boolean;
  banner?: string;
  deleted: boolean;
  inbox_url: string;
  shared_inbox_url: string;
  matrix_user_id?: string;
  admin: boolean;
  bot_account: boolean;
}

export interface Site {
  id: number;
  name: string;
  sidebar?: string;
  description?: string;
  creator_id: string;
  published: string;
  updated?: string;
  enable_downvotes: boolean;
  open_registration: boolean;
  enable_nsfw: boolean;
  community_creation_admin_only: boolean;
  icon?: string;
  banner?: string;
}

export interface PrivateMessage {
  id: string;
  creator_id: string;
  recipient_id: string;
  content: string;
  deleted: boolean;
  read: boolean;
  published: string;
  updated?: string;
  ap_id: string;
  local: boolean;
}

export interface PostReport {
  id: number;
  creator_id: string;
  post_id: string;
  original_post_name: string;
  original_post_url?: string;
  original_post_body?: string;
  reason: string;
  resolved: boolean;
  resolver_id?: string;
  published: string;
  updated?: string;
}

export interface Post {
  id: string;
  name: string;
  url?: string;
  body?: string;
  creator_id: string;
  community_id: string;
  removed: boolean;
  locked: boolean;
  published: string;
  updated?: string;
  deleted: boolean;
  nsfw: boolean;
  stickied: boolean;
  embed_title?: string;
  embed_description?: string;
  embed_html?: string;
  thumbnail_url?: string;
  ap_id: string;
  local: boolean;
}

export interface PasswordResetRequest {
  id: number;
  local_user_id: string;
  token_encrypted: string;
  published: string;
}

export interface ModRemovePost {
  id: number;
  mod_person_id: string;
  post_id: string;
  reason?: string;
  removed?: boolean;
  when_: string;
}

export interface ModLockPost {
  id: number;
  mod_person_id: string;
  post_id: string;
  locked?: boolean;
  when_: string;
}

export interface ModStickyPost {
  id: number;
  mod_person_id: string;
  post_id: string;
  stickied?: boolean;
  when_: string;
}

export interface ModRemoveComment {
  id: number;
  mod_person_id: string;
  comment_id: string;
  reason?: string;
  removed?: boolean;
  when_: string;
}

export interface ModRemoveCommunity {
  id: number;
  mod_person_id: string;
  community_id: string;
  reason?: string;
  removed?: boolean;
  expires?: string;
  when_: string;
}

export interface ModBanFromCommunity {
  id: number;
  mod_person_id: string;
  other_person_id: string;
  community_id: string;
  reason?: string;
  banned?: boolean;
  expires?: string;
  when_: string;
}

export interface ModBan {
  id: number;
  mod_person_id: string;
  other_person_id: string;
  reason?: string;
  banned?: boolean;
  expires?: string;
  when_: string;
}

export interface ModAddCommunity {
  id: number;
  mod_person_id: string;
  other_person_id: string;
  community_id: string;
  removed?: boolean;
  when_: string;
}

export interface ModAdd {
  id: number;
  mod_person_id: string;
  other_person_id: string;
  removed?: boolean;
  when_: string;
}

export interface CommunitySafe {
  id: string;
  name: string;
  title: string;
  description?: string;
  removed: boolean;
  published: string;
  updated?: string;
  deleted: boolean;
  nsfw: boolean;
  actor_id: string;
  local: boolean;
  icon?: string;
  banner?: string;
}

export interface CommentReport {
  id: number;
  creator_id: string;
  comment_id: string;
  original_comment_text: string;
  reason: string;
  resolved: boolean;
  resolver_id?: string;
  published: string;
  updated?: string;
}

export interface Comment {
  id: string;
  creator_id: string;
  post_id: string;
  parent_id?: string;
  content: string;
  removed: boolean;
  read: boolean; // Whether the recipient has read the comment or not
  published: string;
  updated?: string;
  deleted: boolean;
  ap_id: string;
  local: boolean;
}

export interface PersonMention {
  id: number;
  recipient_id: string;
  comment_id: string;
  read: boolean;
  published: string;
}
