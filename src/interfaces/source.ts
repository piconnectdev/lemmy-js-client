export interface LocalUserSettings {
  id: string;
  person_id: string;
  email?: string;
  show_nsfw: boolean;
  theme: string;
  default_sort_type: number;
  default_listing_type: number;
  interface_language: string;
  show_avatars: boolean;
  send_notifications_to_email: boolean;
  validator_time: string;
  show_bot_accounts: boolean;
  show_scores: boolean;
  show_read_posts: boolean;
  show_new_post_notifs: boolean;
  email_verified: boolean;
  accepted_application: boolean;
  sign_data: boolean;
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
  shared_inbox_url?: string;
  matrix_user_id?: string;
  admin: boolean;
  bot_account: boolean;
  ban_expires?: string;
  instance_id: number;
  verified: boolean;
  home?: string;
  pi_address?: string;
  web3_address?: string;
  pol_address?: string;
  dap_address?: string;
  cosmos_address?: string;
  sui_address?: string;
  ton_address?: string;
  auth_sign?: string;
  srv_sign?: string;
  tx?: string;
}

export interface Site {
  id: string;
  name: string;
  sidebar?: string;
  published: string;
  updated?: string;
  icon?: string;
  banner?: string;
  description?: string;
  actor_id: string;
  last_refreshed_at: string;
  inbox_url: string;
  private_key?: string;
  public_key: string;
  instance_id: string;
  srv_sign?: string;
  tx?: string;
}

export enum RegistrationMode {
  Closed = "closed",
  RequireApplication = "requireapplication",
  Open = "open",
}

export interface LocalSite {
  id: string;
  site_id: string;
  site_setup: boolean;
  enable_downvotes: boolean;
  registration_mode: RegistrationMode;
  enable_nsfw: boolean;
  community_creation_admin_only: boolean;
  require_email_verification: boolean;
  application_question?: string;
  private_instance: boolean;
  default_theme: string;
  default_post_listing_type: string;
  legal_information?: string;
  hide_modlog_mod_names: boolean;
  application_email_admins: boolean;
  reports_email_admins: boolean;
  slur_filter_regex?: string;
  actor_name_max_length: number;
  federation_enabled: boolean;
  federation_debug: boolean;
  federation_worker_count: number;
  captcha_enabled: boolean;
  captcha_difficulty: string;
  published: string;
  updated?: string;
}

export interface LocalSiteRateLimit {
  id: string;
  local_site_id: string;
  message: number;
  message_per_second: number;
  post: number;
  post_per_second: number;
  register: number;
  register_per_second: number;
  image: number;
  image_per_second: number;
  comment: number;
  comment_per_second: number;
  search: number;
  search_per_second: number;
  published: string;
  updated?: string;
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
  secured?: string;
  auth_sign?: string;
  srv_sign?: string;
  tx?: string;
}

export interface PostReport {
  id: string;
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
  embed_title?: string;
  embed_description?: string;
  embed_video_url?: string;
  thumbnail_url?: string;
  ap_id: string;
  local: boolean;
  language_id: number;
  featured_community: boolean;
  featured_local: boolean;

  auth_sign?: string;
  srv_sign?: string;
  pipayid?: string;
  tx?: string;
}

export interface PasswordResetRequest {
  id: string;
  local_user_id: string;
  token_encrypted: string;
  published: string;
}

export interface ModRemovePost {
  id: string;
  mod_person_id: string;
  post_id: string;
  reason?: string;
  removed?: boolean;
  when_: string;
}

export interface ModLockPost {
  id: string;
  mod_person_id: string;
  post_id: string;
  locked?: boolean;
  when_: string;
}

export interface ModFeaturePost {
  id: string;
  mod_person_id: string;
  post_id: string;
  featured: boolean;
  is_featured_community: boolean;
  when_: string;
}

export interface ModRemoveComment {
  id: string;
  mod_person_id: string;
  comment_id: string;
  reason?: string;
  removed?: boolean;
  when_: string;
}

export interface ModRemoveCommunity {
  id: string;
  mod_person_id: string;
  community_id: string;
  reason?: string;
  removed?: boolean;
  expires?: string;
  when_: string;
}

export interface ModBanFromCommunity {
  id: string;
  mod_person_id: string;
  other_person_id: string;
  community_id: string;
  reason?: string;
  banned?: boolean;
  expires?: string;
  when_: string;
}

export interface ModBan {
  id: string;
  mod_person_id: string;
  other_person_id: string;
  reason?: string;
  banned?: boolean;
  expires?: string;
  when_: string;
}

export interface ModAddCommunity {
  id: string;
  mod_person_id: string;
  other_person_id: string;
  community_id: string;
  removed?: boolean;
  when_: string;
}

export interface ModTransferCommunity {
  id: string;
  mod_person_id: string;
  other_person_id: string;
  community_id: string;
  removed?: boolean;
  when_: string;
}

export interface ModAdd {
  id: string;
  mod_person_id: string;
  other_person_id: string;
  removed?: boolean;
  when_: string;
}

export interface AdminPurgePerson {
  id: string;
  admin_person_id: string;
  reason?: string;
  when_: string;
}

export interface AdminPurgeCommunity {
  id: string;
  admin_person_id: string;
  reason?: string;
  when_: string;
}

export interface AdminPurgePost {
  id: string;
  admin_person_id: string;
  community_id: string;
  reason?: string;
  when_: string;
}

export interface AdminPurgeComment {
  id: string;
  admin_person_id: string;
  post_id: string;
  reason?: string;
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
  hidden: boolean;
  posting_restricted_to_mods: boolean;
  instance_id: string;
  srv_sign?: string;
  tx?: string;
}

export interface CommentReport {
  id: string;
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
  content: string;
  removed: boolean;
  published: string;
  updated?: string;
  deleted: boolean;
  ap_id: string;
  local: boolean;
  path: string;
  distinguished: boolean;
  language_id: number;
  auth_sign?: string;
  srv_sign?: string;
  pipayid?: string;
  tx?: string;
}

export interface PersonMention {
  id: string;
  recipient_id: string;
  comment_id: string;
  read: boolean;
  published: string;
}

export interface CommentReply {
  id: string;
  recipient_id: string;
  comment_id: string;
  read: boolean;
  published: string;
}

export interface RegistrationApplication {
  id: string;
  local_user_id: string;
  answer: string;
  admin_id?: string;
  deny_reason?: string;
  published: string;
}

export interface Language {
  id: number;
  code: string;
  name: string;
}

export interface PrivateMessageReport {
  id: string;
  creator_id: string;
  private_message_id: string;
  original_pm_text: string;
  reason: string;
  resolved: boolean;
  resolver_id?: string;
  published: string;
  updated?: string;
}

export interface Tagline {
  id: string;
  local_site_id: string;
  content: string;
  published: string;
  updated?: string;
}
