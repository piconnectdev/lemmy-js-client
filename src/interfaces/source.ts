import { Option } from "@sniptt/monads";
import { Expose, Transform } from "class-transformer";
import { toOption, toUndefined } from "../utils";

export class LocalUserSettings {
  id: string;
  person_id: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  email: Option<string>;
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

export class PersonSafe {
  id: string;
  name: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  display_name: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  avatar: Option<string>;
  banned: boolean;
  published: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  updated: Option<string>;
  actor_id: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  bio: Option<string>;
  local: boolean;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  banner: Option<string>;
  deleted: boolean;
  inbox_url: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  shared_inbox_url: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  matrix_user_id: Option<string>;
  admin: boolean;
  bot_account: boolean;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  ban_expires: Option<string>;
  instance_id: string;

  pi_address: Option<string>;
  web3_address: Option<string>;
  pol_address: Option<string>;
  dap_address: Option<string>;
  cosmos_address: Option<string>;
  sui_address: Option<string>;
  ton_address: Option<string>;
  auth_sign: Option<string>;
  srv_sign: Option<string>;
  tx: Option<string>;
}

export class Site {
  id: string;
  name: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  sidebar: Option<string>;
  published: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  updated: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  icon: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  banner: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  description: Option<string>;
  actor_id: string;
  last_refreshed_at: string;
  inbox_url: string;
  private_key: Option<string>;
  public_key: string;
  instance_id: string;
  srv_sign: Option<string>;
  tx: Option<string>;
}

export class LocalSite {
  id: string;
  site_id: string;
  site_setup: boolean;
  enable_downvotes: boolean;
  open_registration: boolean;
  enable_nsfw: boolean;
  community_creation_admin_only: boolean;
  require_email_verification: boolean;
  require_application: boolean;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  application_question: Option<string>;
  private_instance: boolean;
  default_theme: string;
  default_post_listing_type: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  legal_information: Option<string>;
  hide_modlog_mod_names: boolean;
  application_email_admins: boolean;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  slur_filter_regex: Option<string>;
  actor_name_max_length: number;
  federation_enabled: boolean;
  federation_debug: boolean;
  federation_worker_count: number;
  captcha_enabled: boolean;
  captcha_difficulty: string;
  published: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  updated: Option<string>;
}

export class LocalSiteRateLimit {
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
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  updated: Option<string>;
}

export class PrivateMessage {
  id: string;
  creator_id: string;
  recipient_id: string;
  content: string;
  deleted: boolean;
  read: boolean;
  published: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  updated: Option<string>;
  ap_id: string;
  local: boolean;
  secured: string;
  auth_sign: string;
  srv_sign: string;
  tx: string;
}

export class PostReport {
  id: string;
  creator_id: string;
  post_id: string;
  original_post_name: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  original_post_url: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  original_post_body: Option<string>;
  reason: string;
  resolved: boolean;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  resolver_id: Option<string>;
  published: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  updated: Option<string>;
}

export class Post {
  id: string;
  name: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  url: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  body: Option<string>;
  creator_id: string;
  community_id: string;
  removed: boolean;
  locked: boolean;
  published: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  updated: Option<string>;
  deleted: boolean;
  nsfw: boolean;
  stickied: boolean;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  embed_title: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  embed_description: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  embed_video_url: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  thumbnail_url: Option<string>;
  ap_id: string;
  local: boolean;
  language_id: number;
  auth_sign: string;
  srv_sign: string;
  tx: string;
}

export class PasswordResetRequest {
  id: string;
  local_user_id: string;
  token_encrypted: string;
  published: string;
}

export class ModRemovePost {
  id: string;
  mod_person_id: string;
  post_id: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  reason: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  removed: Option<boolean>;
  when_: string;
}

export class ModLockPost {
  id: string;
  mod_person_id: string;
  post_id: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  locked: Option<boolean>;
  when_: string;
}

export class ModStickyPost {
  id: string;
  mod_person_id: string;
  post_id: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  stickied: Option<boolean>;
  when_: string;
}

export class ModRemoveComment {
  id: string;
  mod_person_id: string;
  comment_id: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  reason: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  removed: Option<boolean>;
  when_: string;
}

export class ModRemoveCommunity {
  id: string;
  mod_person_id: string;
  community_id: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  reason: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  removed: Option<boolean>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  expires: Option<string>;
  when_: string;
}

export class ModBanFromCommunity {
  id: string;
  mod_person_id: string;
  other_person_id: string;
  community_id: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  reason: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  banned: Option<boolean>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  expires: Option<string>;
  when_: string;
}

export class ModBan {
  id: string;
  mod_person_id: string;
  other_person_id: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  reason: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  banned: Option<boolean>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  expires: Option<string>;
  when_: string;
}

export class ModAddCommunity {
  id: string;
  mod_person_id: string;
  other_person_id: string;
  community_id: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  removed: Option<boolean>;
  when_: string;
}

export class ModTransferCommunity {
  id: string;
  mod_person_id: string;
  other_person_id: string;
  community_id: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  removed: Option<boolean>;
  when_: string;
}

export class ModAdd {
  id: string;
  mod_person_id: string;
  other_person_id: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  removed: Option<boolean>;
  when_: string;
}

export class AdminPurgePerson {
  id: string;
  admin_person_id: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  reason: Option<string>;
  when_: string;
}

export class AdminPurgeCommunity {
  id: string;
  admin_person_id: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  reason: Option<string>;
  when_: string;
}

export class AdminPurgePost {
  id: string;
  admin_person_id: string;
  community_id: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  reason: Option<string>;
  when_: string;
}

export class AdminPurgeComment {
  id: string;
  admin_person_id: string;
  post_id: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  reason: Option<string>;
  when_: string;
}

export class CommunitySafe {
  id: string;
  name: string;
  title: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  description: Option<string>;
  removed: boolean;
  published: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  updated: Option<string>;
  deleted: boolean;
  nsfw: boolean;
  actor_id: string;
  local: boolean;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  icon: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  banner: Option<string>;
  hidden: boolean;
  posting_restricted_to_mods: boolean;
  instance_id: string;
  srv_sign: string;
  tx: string;
}

export class CommentReport {
  id: string;
  creator_id: string;
  comment_id: string;
  original_comment_text: string;
  reason: string;
  resolved: boolean;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  resolver_id: Option<string>;
  published: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  updated: Option<string>;
}

export class Comment {
  id: string;
  creator_id: string;
  post_id: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  parent_id: Option<string>;
  content: string;
  removed: boolean;
  published: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  updated: Option<string>;
  deleted: boolean;
  ap_id: string;
  local: boolean;
  path: string;
  distinguished: boolean;
  language_id: number;
  auth_sign: string;
  srv_sign: string;
  tx: string;
}

export class PersonMention {
  id: string;
  recipient_id: string;
  comment_id: string;
  read: boolean;
  published: string;
}

export class CommentReply {
  id: string;
  recipient_id: string;
  comment_id: string;
  read: boolean;
  published: string;
}

export class RegistrationApplication {
  id: string;
  local_user_id: string;
  answer: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  admin_id: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  deny_reason: Option<string>;
  published: string;
}

export class Language {
  id: number;
  code: string;
  name: string;
}

export class PrivateMessageReport {
  id: string;
  creator_id: string;
  private_message_id: string;
  original_pm_text: string;
  reason: string;
  resolved: boolean;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  resolver_id: Option<string>;
  published: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  updated: Option<string>;
}

export class Tagline {
  id: string;
  local_site_id: string;
  content: string;
  published: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  updated: Option<string>;
}
