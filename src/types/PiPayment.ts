// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import { Login } from "./Login";
import { LoginResponse } from "./LoginResponse";
import { Register } from "./Register";

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
  domain?: string;
  pi_token: string;
  pi_username: string;
  pi_uid?: string;
  obj_cat?: string;
  obj_id?: string;
  ref_id?: string;
  paymentid: string;
  comment?: string;
  auth?: string;
}

export class PiApproveResponse {
  success: boolean;
  id: string;
  paymentid: string;
}

export class PiPaymentComplete {
  domain?: string;
  pi_token: string;
  pi_username: string;
  pi_uid?: string;
  paymentid: string;
  txid: string;
  obj_id?: string;
  comment?: string;
  auth?: string;
}

export class PiPaymentCompleteResponse {
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
  from_address: string;
  to_address: string; // The recipient address of the blockchain transaction
  created_at: string; // The payment's creation timestamp
  direction: string;
  network: string;
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
  domain?: string;
  pi_token: string;
  pi_uid?: string;
  pi_username: string;
  paymentid: string;
  auth?: string;
  dto?: PiPaymentDTO;
}

export class PiPaymentFoundResponse {
  success: boolean;
  id: string;
  paymentid: string;
}

export class PiPaymentCancel {
  domain?: string;
  pi_token: string;
  pi_uid?: string;
  pi_username: string;
  paymentid: string;
  auth?: string;
}

export class PiPaymentError {
  domain?: string;
  pi_token: string;
  pi_username: string;
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
  spent: number;
  received: number;
  withdrawed: number;
  amount: number;
  pending: number;
}

export interface PiWithdraw {
  pi_token?: string;
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

export class PiPaymentSafe {
  id: string;
  person_id?: string;
  obj_cat?: string;
  obj_id?: string;
  ref_id?: string;
  a2u: number;
  step: number;
  asset?: string;
  fee: number;
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
  network?: string;
  created_at: string; // The payment's creation timestamp

  approved: boolean; // Server-Side Approval
  verified: boolean; // Blockchain transaction verified
  completed: boolean; // Server-Side Completion
  cancelled: boolean; // Cancelled by the developer or by Pi Network
  user_cancelled: boolean; // Cancelled by the user

  tx_verified: boolean;
  tx_link?: string;
  tx_id?: string;
}

export interface CreatePayment {
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

export interface ApprovePayment {
  id: string;
  stat: number;
  auth: string;
}

export interface ApprovePaymentResponse {
  success: boolean;
  id?: string;
  payment?: PiPaymentSafe;
}

export interface SendPayment {
  id?: string;
  auth: string;
}

export interface SendPaymentResponse {
  success: boolean;
  payment?: PiPaymentSafe;
}

export interface GetPayment {
  id: string;
  auth: string;
}

export interface GetPaymentResponse {
  success: boolean;
  payment: PiPaymentSafe;
}

export interface GetPayments {
  person_id?: string;
  person_name?: string;
  a2u?: number;
  step?: number;
  pending?: boolean;
  page?: number;
  limit?: number;
  auth: string;
}

export interface GetPaymentsResponse {
  success: boolean;
  payments: PiPaymentSafe[];
}
