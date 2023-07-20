// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { InstanceId } from "./InstanceId";
import type { PersonId } from "./PersonId";

export interface Person {
  id: PersonId;
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
  matrix_user_id?: string;
  admin: boolean;
  bot_account: boolean;
  ban_expires?: string;
  instance_id: InstanceId;
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
