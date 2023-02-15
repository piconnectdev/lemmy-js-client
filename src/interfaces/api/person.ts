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

export interface Login {
  username_or_email: string;
  password: string;
}

/**
 * Register a new user.
 *
 * Only the first user to register will be able to be the admin.
 */
export interface Register {
  username: string;
  /**
   * Email is mandatory if email verification is enabled on the server
   */
  email?: string;
  password: string;
  password_verify: string;
  show_nsfw: boolean;
  /**
   * Captcha is only checked if these are enabled in the server.
   */
  captcha_uuid?: string;
  captcha_answer?: string;
  honeypot?: string;
  /**
   * An answer is mandatory if require application is enabled on the server
   */
  answer?: string;
}

export interface GetCaptcha {}

export interface GetCaptchaResponse {
  /**
   * Will be undefined if captchas are disabled.
   */
  ok?: CaptchaResponse;
}

export interface CaptchaResponse {
  /**
   * A Base64 encoded png.
   */
  png: string;

  /**
   * A Base64 encoded wav file.
   */
  wav?: string;

  /**
   * A UUID to match the one given on request.
   */
  uuid: string;
}

export interface SaveUserSettings {
  show_nsfw?: boolean;

  /**
   * Default for this is `browser`.
   */
  theme?: string;

  /**
   * The [[SortType]].
   *
   * The Sort types from above, zero indexed as a number
   */
  default_sort_type?: number;

  /**
   * The [[ListingType]].
   *
   * Post listing types are `All, Subscribed, Community`
   */
  default_listing_type?: number;
  interface_language?: string;
  avatar?: string;
  banner?: string;
  display_name?: string;
  email?: string;
  bio?: string;
  matrix_user_id?: string;
  show_avatars?: boolean;
  show_scores?: boolean;
  send_notifications_to_email?: boolean;
  bot_account?: boolean;
  show_bot_accounts?: boolean;
  show_read_posts?: boolean;
  show_new_post_notifs?: boolean;
  discussion_languages?: number[];
  auth: string;

  pi_address?: string;

  web3_address?: string;

  pol_address?: string;

  dap_address?: string;

  cosmos_address?: string;

  sui_address?: string;

  ton_address?: string;

  auth_sign?: string;
  sign_data: boolean;
}

export interface ChangePassword {
  new_password: string;
  new_password_verify: string;
  old_password: string;
  auth: string;
}

/**
 * The `jwt` string should be stored and used anywhere `auth` is called for.
 */
export interface LoginResponse {
  /**
   * This is None in response to `Register` if email verification is enabled, or the server requires registration applications.
   */
  jwt?: string;
  verify_email_sent: boolean;
  registration_created: boolean;
}

export interface GetPersonDetails {
  person_id?: string;
  /**
   * To get details for a federated user, use `person@instance.tld`.
   */
  username?: string;
  sort?: SortType;
  page?: number;
  limit?: number;
  community_id?: string;
  saved_only?: boolean;
  auth?: string;
}

export interface GetPersonDetailsResponse {
  person_view: PersonViewSafe;
  comments: CommentView[];
  posts: PostView[];
  moderates: CommunityModeratorView[];
}

export interface GetRepliesResponse {
  replies: CommentReplyView[];
}

export interface GetPersonMentionsResponse {
  mentions: PersonMentionView[];
}

export interface MarkAllAsRead {
  auth: string;
}

export interface AddAdmin {
  person_id: string;
  added: boolean;
  auth: string;
}

export interface AddAdminResponse {
  admins: PersonViewSafe[];
}

export interface BanPerson {
  person_id: string;
  ban: boolean;

  /**
   * Removes/Restores their comments, posts, and communities
   */
  remove_data?: boolean;
  reason?: string;
  /**
   * The expire time in Unix seconds
   */
  expires?: number;
  auth: string;
}

export interface BanPersonResponse {
  person_view: PersonViewSafe;
  banned: boolean;
}

export interface GetReplies {
  sort?: CommentSortType;
  page?: number;
  limit?: number;
  unread_only?: boolean;
  auth: string;
}

export interface GetPersonMentions {
  sort?: CommentSortType;
  page?: number;
  limit?: number;
  unread_only?: boolean;
  auth: string;
}

export interface MarkPersonMentionAsRead {
  person_mention_id: string;
  read: boolean;
  auth: string;
}

export interface PersonMentionResponse {
  person_mention_view: PersonMentionView;
}

export interface MarkCommentReplyAsRead {
  comment_reply_id: string;
  read: boolean;
  auth: string;
}

export interface CommentReplyResponse {
  comment_reply_view: CommentReplyView;
}

/**
 * Permanently deletes your posts and comments
 */
export interface DeleteAccount {
  password: string;
  auth: string;
}

export interface DeleteAccountResponse {}

export interface PasswordReset {
  email: string;
}

export interface PasswordResetResponse {}

export interface PasswordChange {
  token: string;
  password: string;
  password_verify: string;
}

export interface CreatePrivateMessage {
  content: string;
  recipient_id: string;
  secured?: string;
  auth_sign?: string;
  auth: string;
}

export interface EditPrivateMessage {
  private_message_id: string;
  content: string;
  secured?: string;
  auth_sign?: string;
  auth: string;
}

export interface DeletePrivateMessage {
  private_message_id: string;
  deleted: boolean;
  auth: string;
}

export interface MarkPrivateMessageAsRead {
  private_message_id: string;
  read: boolean;
  auth: string;
}

export interface GetPrivateMessages {
  unread_only?: boolean;
  page?: number;
  limit?: number;
  auth: string;
}

export interface PrivateMessagesResponse {
  private_messages: PrivateMessageView[];
}

export interface PrivateMessageResponse {
  private_message_view: PrivateMessageView;
}

export interface CreatePrivateMessageReport {
  private_message_id: string;
  reason: string;
  auth: string;
}

export interface PrivateMessageReportResponse {
  private_message_report_view: PrivateMessageReportView;
}

export interface ResolvePrivateMessageReport {
  report_id: string;
  resolved: boolean;
  auth: string;
}

export interface ListPrivateMessageReports {
  page?: number;
  limit?: number;
  /// Only shows the unresolved reports
  unresolved_only?: boolean;
  auth: string;
}

export interface ListPrivateMessageReportsResponse {
  private_message_reports: PrivateMessageReportView[];
}

export interface GetReportCount {
  /**
   * If a community is supplied, returns the report count for only that community, otherwise returns the report count for all communities the user moderates.
   */
  community_id?: string;
  auth: string;
}

export interface GetReportCountResponse {
  community_id?: string;
  comment_reports: number;
  post_reports: number;
  private_message_reports?: number;
}

export interface GetUnreadCount {
  auth: string;
}

export interface GetUnreadCountResponse {
  replies: number;
  mentions: number;
  private_messages: number;
}

export interface VerifyEmail {
  token: string;
}

export interface VerifyEmailResponse {}

export interface BlockPerson {
  person_id: string;
  block: boolean;
  auth: string;
}

export interface BlockPersonResponse {
  person_view: PersonViewSafe;
  blocked: boolean;
}

export interface GetBannedPersons {
  auth: string;
}

export interface BannedPersonsResponse {
  banned: PersonViewSafe[];
}

export class ExternalAccount {
  account: string;
  token: string;

  provider?: string;

  signature?: string;
  epoch: number;

  extra?: string;

  uuid?: string;
}

export class Web3Register {
  ea: ExternalAccount;
  info: Register;
}

export class Web3Login {
  account: string;
  token: string;
  epoch: number;
  signature?: string;
  info?: Login;
}

export class PiRegister {
  domain?: string;

  ea: ExternalAccount;
  info: Register;
}

export class PiAgreeRegister {
  domain?: string;

  ea: ExternalAccount;
  info: Register;
  paymentid: string;
}

export class PiAgreeRegisterResponse {
  success: boolean;
  paymentid: string;

  id?: string;
  extra?: string;
}

export class PiRegisterWithFee {
  domain?: string;

  ea: ExternalAccount;
  paymentid: string;
  txid: string;
  info: Register;
}

export class PiRegisterResponse {
  success: boolean;
  login: LoginResponse;
  extra?: string;
}

export class PiLogin {
  domain?: string;

  ea: ExternalAccount;
  info?: Login;
}

export class PiApprove {
  pi_username: string;
  pi_token: string;

  paymentid: string;

  domain?: string;

  pi_uid?: string;

  object_id?: string;
  comment?: string;
  auth?: string;
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

  domain?: string;

  pi_uid?: string;

  object_id?: string;
  comment?: string;
  auth?: string;
}

export class PiTipResponse {
  success: boolean;
  id: string;
  paymentid: string;
}

export class PiPaymentDTO {
  // Payment data:
  identifier: string; // The payment identifier
  user_uid: string; // The user's app-specific ID
  amount: number; // The payment amount
  memo: string; // A string provided by the developer, shown to the user
  metadata?: object; // An object provided by the developer for their own usage
  to_address: string; // The recipient address of the blockchain transaction
  created_at: string; // The payment's creation timestamp

  // Status flags representing the current state of this payment
  status: {
    developer_approved: boolean; // Server-Side Approval
    transaction_verified: boolean; // Blockchain transaction verified
    developer_completed: boolean; // Server-Side Completion
    cancelled: boolean; // Cancelled by the developer or by Pi Network
    user_cancelled: boolean; // Cancelled by the user
  };

  // Blockchain transaction data:
  transaction: null | {
    // This is null if no transaction has been made yet
    txid: string; // The id of the blockchain transaction
    verified: boolean; // True if the transaction matches the payment, false otherwise
    _link: string; // A link to the operation on the Blockchain API
  };
}

export class PiPaymentFound {
  pi_username: string;
  pi_token: string;

  paymentid: string;

  domain?: string;

  pi_uid?: string;

  person_id?: string;

  comment?: string;

  auth?: string;
  dto?: PiPaymentDTO;
}

export class PiPaymentFoundResponse {
  success: boolean;
  id: string;
  paymentid: string;
}

export class PiPaymentCancel {
  pi_username: string;
  pi_token: string;

  paymentid: string;

  domain?: string;

  pi_uid?: string;

  auth?: string;
  dto?: PiPaymentDTO;
}

export class PiPaymentError {
  pi_username: string;
  pi_token: string;

  domain?: string;

  pi_uid?: string;

  auth?: string;
  dto?: PiPaymentDTO;
}

export class PiKey {
  pi_username: string;

  domain?: string;

  pi_token?: string;

  pi_uid?: string;

  pi_key?: string;

  auth?: string;
}

export class PiKeyResponse {
  success: boolean;
  id: string;
}

export interface GetPiBalances {
  domain?: string;
  asset: string;
  auth: string;
}

export interface GetPiBalancesResponse {
  id?: string;
  asset?: string;
  status: string;
  deposited: number;
  rewarded: number;
  withdrawed: number;
  amount: number;
  pending: number;
}

export class PiPaymentSafe {
  id: string;
  person_id?: string;
  obj_cat?: string;
  obj_id?: string;
  ref_id?: string;
  a2u: boolean;
  asset?: string;

  fee: number;
  step: number;
  finished: boolean;
  comment?: string;
  stat?: string;
  published: string;
  updated?: string;

  // Payment data:
  identifier: string; // The payment identifier
  user_uid: string; // The user's app-specific ID
  amount: number; // The payment amount
  memo: string; // A string provided by the developer, shown to the user
  metadata?: object; // An object provided by the developer for their own usage
  from_address?: string;
  to_address?: string; // The recipient address of the blockchain transaction
  created_at: string; // The payment's creation timestamp

  approved: boolean; // Server-Side Approval
  verified: boolean; // Blockchain transaction verified
  completed: boolean; // Server-Side Completion
  cancelled: boolean; // Cancelled by the developer or by Pi Network
  user_cancelled: boolean; // Cancelled by the user

  tx_verified: boolean;
  tx_link?: string;
  tx_id?: string;
  network?: string;
}

export interface CreatePayment {
  // pi_username: string;
  // pi_token: string;
  // paymentid: string;
  // pi_uid?: string;
  domain?: string;
  obj_cat?: string;
  obj_id?: string;
  ref_id?: string;
  network?: string;
  asset?: string;
  amount: number;
  comment?: string;
  auth: string;
}

export interface CreatePaymentResponse {
  success: boolean;
  id: string;
  pipayid?: string;
}

export interface PiWithdraw {
  domain?: string;
  asset: string;
  amount: number;
  comment?: string;
  auth: string;
}

export interface PiWithdrawResponse {
  id: string;
  status?: string;
  pipayid?: string;
}

export interface GetPayment {
  id: string;
  auth: string;
}

export interface GetPaymentResponse {
  success: boolean;
  payments: PiPaymentSafe;
}

export interface GetPayments {
  person_id?: string;
  person_name?: string;
  step?: number;
  a2u?: boolean;
  pending?: boolean;
  page?: number;
  limit?: number;
  auth: string;
}

export interface GetPaymentsResponse {
  success: boolean;
  payments: PiPaymentSafe[];
}

export interface ApprovePayment {
  payment_id?: string;
  auth: string;
}

export interface ApprovePaymentResponse {
  success: boolean;
  payment?: PiPaymentSafe;
}

export interface SendPayment {
  payment_id?: string;
  auth: string;
}

export interface SendPaymentResponse {
  success: boolean;
  payment?: PiPaymentSafe;
}
