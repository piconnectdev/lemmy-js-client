import { Option } from "@sniptt/monads";
import { Expose, Transform, Type } from "class-transformer";
import "reflect-metadata";
import { toOption, toUndefined } from "../../utils";
import { CommentSortType, SortType } from "../others";
import {
  CommentReplyView,
  CommentView,
  CommunityModeratorView,
  PersonMentionView,
  PersonViewSafe,
  PostView,
  PrivateMessageReportView,
  PrivateMessageView,
} from "../views";

export class Login {
  username_or_email: string;
  password: string;

  constructor(init: Login) {
    Object.assign(this, init);
  }
}

/**
 * Register a new user.
 *
 * Only the first user to register will be able to be the admin.
 */
export class Register {
  username: string;
  /**
   * Email is mandatory if email verification is enabled on the server
   */
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  email: Option<string>;
  password: string;
  password_verify: string;
  show_nsfw: boolean;
  /**
   * Captcha is only checked if these are enabled in the server.
   */
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  captcha_uuid: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  captcha_answer: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  honeypot: Option<string>;
  /**
   * An answer is mandatory if require application is enabled on the server
   */
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  answer: Option<string>;

  constructor(init: Register) {
    Object.assign(this, init);
  }
}

export class GetCaptcha {}

export class GetCaptchaResponse {
  /**
   * Will be undefined if captchas are disabled.
   */
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  @Type(() => CaptchaResponse)
  ok: Option<CaptchaResponse>;
}

export class CaptchaResponse {
  /**
   * A Base64 encoded png.
   */
  png: string;

  /**
   * A Base64 encoded wav file.
   */
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  wav: Option<string>;

  /**
   * A UUID to match the one given on request.
   */
  uuid: string;
}

export class SaveUserSettings {
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  show_nsfw: Option<boolean>;

  /**
   * Default for this is `browser`.
   */
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  theme: Option<string>;

  /**
   * The [[SortType]].
   *
   * The Sort types from above, zero indexed as a number
   */
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  default_sort_type: Option<number>;

  /**
   * The [[ListingType]].
   *
   * Post listing types are `All, Subscribed, Community`
   */
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  default_listing_type: Option<number>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  interface_language: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  avatar: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  banner: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  display_name: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  email: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  bio: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  matrix_user_id: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  show_avatars: Option<boolean>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  show_scores: Option<boolean>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  send_notifications_to_email: Option<boolean>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  bot_account: Option<boolean>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  show_bot_accounts: Option<boolean>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  show_read_posts: Option<boolean>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  show_new_post_notifs: Option<boolean>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  discussion_languages: Option<number[]>;
  auth: string;

  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  pi_address: Option<string>;

  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  web3_address: Option<string>;

  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  pol_address: Option<string>;

  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  dap_address: Option<string>;

  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  cosmos_address: Option<string>;

  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  sui_address: Option<string>;

  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  ton_address: Option<string>;

  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  auth_sign: Option<string>;
  sign_data: boolean;
  constructor(init: SaveUserSettings) {
    Object.assign(this, init);
  }
}

export class ChangePassword {
  new_password: string;
  new_password_verify: string;
  old_password: string;
  auth: string;

  constructor(init: ChangePassword) {
    Object.assign(this, init);
  }
}

/**
 * The `jwt` string should be stored and used anywhere `auth` is called for.
 */
export class LoginResponse {
  /**
   * This is None in response to `Register` if email verification is enabled, or the server requires registration applications.
   */
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  jwt: Option<string>;
  verify_email_sent: boolean;
  registration_created: boolean;
}

export class GetPersonDetails {
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  person_id: Option<string>;
  /**
   * To get details for a federated user, use `person@instance.tld`.
   */
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  username: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  sort: Option<SortType>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  page: Option<number>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  limit: Option<number>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  community_id: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  saved_only: Option<boolean>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  auth: Option<string>;

  constructor(init: GetPersonDetails) {
    Object.assign(this, init);
  }
}

export class GetPersonDetailsResponse {
  @Type(() => PersonViewSafe)
  person_view: PersonViewSafe;
  @Type(() => CommentView)
  comments: CommentView[];
  @Type(() => PostView)
  posts: PostView[];
  @Type(() => CommunityModeratorView)
  moderates: CommunityModeratorView[];
}

export class GetRepliesResponse {
  @Type(() => CommentReplyView)
  replies: CommentReplyView[];
}

export class GetPersonMentionsResponse {
  @Type(() => PersonMentionView)
  mentions: PersonMentionView[];
}

export class MarkAllAsRead {
  auth: string;

  constructor(auth: string) {
    this.auth = auth;
  }
}

export class AddAdmin {
  person_id: string;
  added: boolean;
  auth: string;

  constructor(init: AddAdmin) {
    Object.assign(this, init);
  }
}

export class AddAdminResponse {
  @Type(() => PersonViewSafe)
  admins: PersonViewSafe[];
}

export class BanPerson {
  person_id: string;
  ban: boolean;

  /**
   * Removes/Restores their comments, posts, and communities
   */
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  remove_data: Option<boolean>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  reason: Option<string>;
  /**
   * The expire time in Unix seconds
   */
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  expires: Option<number>;
  auth: string;

  constructor(init: BanPerson) {
    Object.assign(this, init);
  }
}

export class BanPersonResponse {
  @Type(() => PersonViewSafe)
  person_view: PersonViewSafe;
  banned: boolean;
}

export class GetReplies {
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  sort: Option<CommentSortType>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  page: Option<number>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  limit: Option<number>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  unread_only: Option<boolean>;
  auth: string;

  constructor(init: GetReplies) {
    Object.assign(this, init);
  }
}

export class GetPersonMentions {
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  sort: Option<CommentSortType>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  page: Option<number>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  limit: Option<number>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  unread_only: Option<boolean>;
  auth: string;

  constructor(init: GetPersonMentions) {
    Object.assign(this, init);
  }
}

export class MarkPersonMentionAsRead {
  person_mention_id: string;
  read: boolean;
  auth: string;

  constructor(init: MarkPersonMentionAsRead) {
    Object.assign(this, init);
  }
}

export class PersonMentionResponse {
  @Type(() => PersonMentionView)
  person_mention_view: PersonMentionView;
}

export class MarkCommentReplyAsRead {
  comment_reply_id: string;
  read: boolean;
  auth: string;

  constructor(init: MarkCommentReplyAsRead) {
    Object.assign(this, init);
  }
}

export class CommentReplyResponse {
  @Type(() => CommentReplyView)
  comment_reply_view: CommentReplyView;
}

/**
 * Permanently deletes your posts and comments
 */
export class DeleteAccount {
  password: string;
  auth: string;

  constructor(init: DeleteAccount) {
    Object.assign(this, init);
  }
}

export class DeleteAccountResponse {}

export class PasswordReset {
  email: string;

  constructor(init: PasswordReset) {
    Object.assign(this, init);
  }
}

export class PasswordResetResponse {}

export class PasswordChange {
  token: string;
  password: string;
  password_verify: string;

  constructor(init: PasswordChange) {
    Object.assign(this, init);
  }
}

export class CreatePrivateMessage {
  content: string;
  recipient_id: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  secured: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  auth_sign: Option<string>;
  auth: string;

  constructor(init: CreatePrivateMessage) {
    Object.assign(this, init);
  }
}

export class EditPrivateMessage {
  private_message_id: string;
  content: string;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  secured: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  auth_sign: Option<string>;
  auth: string;

  constructor(init: EditPrivateMessage) {
    Object.assign(this, init);
  }
}

export class DeletePrivateMessage {
  private_message_id: string;
  deleted: boolean;
  auth: string;

  constructor(init: DeletePrivateMessage) {
    Object.assign(this, init);
  }
}

export class MarkPrivateMessageAsRead {
  private_message_id: string;
  read: boolean;
  auth: string;

  constructor(init: MarkPrivateMessageAsRead) {
    Object.assign(this, init);
  }
}

export class GetPrivateMessages {
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  unread_only: Option<boolean>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  page: Option<number>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  limit: Option<number>;
  auth: string;

  constructor(init: GetPrivateMessages) {
    Object.assign(this, init);
  }
}

export class PrivateMessagesResponse {
  @Type(() => PrivateMessageView)
  private_messages: PrivateMessageView[];
}

export class PrivateMessageResponse {
  @Type(() => PrivateMessageView)
  private_message_view: PrivateMessageView;
}

export class CreatePrivateMessageReport {
  private_message_id: string;
  reason: string;
  auth: string;

  constructor(init: CreatePrivateMessageReport) {
    Object.assign(this, init);
  }
}

export class PrivateMessageReportResponse {
  @Type(() => PrivateMessageReportView)
  private_message_report_view: PrivateMessageReportView;
}

export class ResolvePrivateMessageReport {
  report_id: string;
  resolved: boolean;
  auth: string;

  constructor(init: ResolvePrivateMessageReport) {
    Object.assign(this, init);
  }
}

export class ListPrivateMessageReports {
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  page: Option<number>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  limit: Option<number>;
  /// Only shows the unresolved reports
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  unresolved_only: Option<boolean>;
  auth: string;

  constructor(init: ListPrivateMessageReports) {
    Object.assign(this, init);
  }
}

export class ListPrivateMessageReportsResponse {
  @Type(() => PrivateMessageReportView)
  private_message_reports: PrivateMessageReportView[];
}

export class GetReportCount {
  /**
   * If a community is supplied, returns the report count for only that community, otherwise returns the report count for all communities the user moderates.
   */
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  community_id: Option<string>;
  auth: string;

  constructor(init: GetReportCount) {
    Object.assign(this, init);
  }
}

export class GetReportCountResponse {
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  community_id: Option<string>;
  comment_reports: number;
  post_reports: number;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  private_message_reports: Option<number>;
}

export class GetUnreadCount {
  auth: string;

  constructor(init: GetUnreadCount) {
    Object.assign(this, init);
  }
}

export class GetUnreadCountResponse {
  replies: number;
  mentions: number;
  private_messages: number;
}

export class VerifyEmail {
  token: string;

  constructor(init: VerifyEmail) {
    Object.assign(this, init);
  }
}

export class VerifyEmailResponse {}

export class BlockPerson {
  person_id: string;
  block: boolean;
  auth: string;

  constructor(init: BlockPerson) {
    Object.assign(this, init);
  }
}

export class BlockPersonResponse {
  @Type(() => PersonViewSafe)
  person_view: PersonViewSafe;
  blocked: boolean;
}

export class GetBannedPersons {
  auth: string;

  constructor(init: GetBannedPersons) {
    Object.assign(this, init);
  }
}

export class BannedPersonsResponse {
  @Type(() => PersonViewSafe)
  banned: PersonViewSafe[];
}

export class ExternalAccount {
  account: string;
  token: string;

  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  provider: Option<string>;

  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  signature: Option<string>;
  epoch: number;

  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  extra: Option<string>;

  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  uuid: Option<string>;
  constructor(init: ExternalAccount) {
    Object.assign(this, init);
  }
}

export class Web3Register {
  ea: ExternalAccount;
  info: Register;
  constructor(init: Web3Register) {
    Object.assign(this, init);
  }
}

export class Web3Login {
  account: string;
  token: string;
  epoch: number;
  signature: Option<string>;
  info: Login;
  constructor(init: Web3Login) {
    Object.assign(this, init);
  }
}

export class PiRegister {
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  domain: Option<string>;

  ea: ExternalAccount;
  info: Register;
  constructor(init: PiRegister) {
    Object.assign(this, init);
  }
}

export class PiAgreeRegister {
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  domain: Option<string>;

  ea: ExternalAccount;
  info: Register;
  paymentid: string;
  constructor(init: PiAgreeRegister) {
    Object.assign(this, init);
  }
}

export class PiAgreeRegisterResponse {
  success: boolean;
  paymentid: string;

  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  id: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  extra: Option<string>;
  constructor(init: PiAgreeRegisterResponse) {
    Object.assign(this, init);
  }
}

export class PiRegisterWithFee {
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  domain: Option<string>;

  ea: ExternalAccount;
  paymentid: string;
  txid: string;
  info: Register;
  constructor(init: PiRegisterWithFee) {
    Object.assign(this, init);
  }
}

export class PiRegisterResponse {
  success: boolean;
  login: LoginResponse;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  extra: Option<string>;
  constructor(init: PiRegisterResponse) {
    Object.assign(this, init);
  }
}

export class PiLogin {
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  domain: Option<string>;

  ea: ExternalAccount;
  info: Login;
  constructor(init: PiLogin) {
    Object.assign(this, init);
  }
}

export class PiApprove {
  pi_username: string;
  pi_token: string;

  paymentid: string;

  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  domain: Option<string>;

  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  pi_uid: Option<string>;

  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  person_id: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  comment: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  auth: Option<string>;
  constructor(init: PiApprove) {
    Object.assign(this, init);
  }
}

export class PiApproveResponse {
  success: boolean;
  id: string;
  paymentid: string;
}

export class PiTip {
  pi_username: string;
  pi_token: string;

  paymentid: string;
  txid: string;

  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  domain: Option<string>;

  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  pi_uid: Option<string>;

  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  person_id: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  comment: Option<string>;
  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  auth: Option<string>;
  constructor(init: PiTip) {
    Object.assign(this, init);
  }
}

export class PiTipResponse {
  success: boolean;
  id: string;
  paymentid: string;
}

export class PiPaymentFound {
  pi_username: string;
  pi_token: string;

  paymentid: string;

  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  domain: Option<string>;

  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  pi_uid: Option<string>;

  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  person_id: Option<string>;

  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  comment: Option<string>;

  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  auth: Option<string>;
  constructor(init: PiPaymentFound) {
    Object.assign(this, init);
  }
}

export class PiPaymentFoundResponse {
  success: boolean;
  id: string;
  paymentid: string;
}

export class PiKey {
  pi_username: string;

  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  domain: Option<string>;

  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  pi_token: Option<string>;

  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  pi_uid: Option<string>;

  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  pi_key: Option<string>;

  @Transform(({ value }) => toOption(value), { toClassOnly: true })
  @Transform(({ value }) => toUndefined(value), { toPlainOnly: true })
  @Expose()
  auth: Option<string>;
  constructor(init: PiKey) {
    Object.assign(this, init);
  }
}

export class PiKeyResponse {
  success: boolean;
  id: string;
}
