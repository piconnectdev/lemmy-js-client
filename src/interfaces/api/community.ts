import { ListingType, SortType } from "../others";
import { Site } from "../source";
import {
  CommunityModeratorView,
  CommunityView,
  PersonViewSafe,
} from "../views";

/**
 * You can use either `id` or `name` as an id.
 *
 * To get a federated community by name, use `name@instance.tld` .
 */
export interface GetCommunity {
  id?: string;
  name?: string;
  auth?: string;
}

export interface GetCommunityResponse {
  community_view: CommunityView;
  site?: Site;
  moderators: CommunityModeratorView[];
  online: number;
  discussion_languages: number[];
  default_post_language?: number;
}

export interface CreateCommunity {
  name: string;
  title: string;
  description?: string;
  icon?: string;
  banner?: string;
  nsfw?: boolean;
  posting_restricted_to_mods?: boolean;
  discussion_languages?: number[];
  auth: string;
  auth_sign?: string;
}

export interface CommunityResponse {
  community_view: CommunityView;
  discussion_languages: number[];
}

export interface ListCommunities {
  type_?: ListingType;
  sort?: SortType;
  page?: number;
  limit?: number;
  auth?: string;
}

export interface ListCommunitiesResponse {
  communities: CommunityView[];
}

export interface BanFromCommunity {
  community_id: string;
  person_id: string;
  ban: boolean;

  /**
   * Removes/Restores their comments and posts for that community.
   */
  remove_data?: boolean;
  reason?: string;
  /**
   * The expire time in Unix seconds
   */
  expires?: number;
  auth: string;
}

export interface BanFromCommunityResponse {
  person_view: PersonViewSafe;
  banned: boolean;
}

export interface AddModToCommunity {
  community_id: string;
  person_id: string;
  added: boolean;
  auth: string;
}

export interface AddModToCommunityResponse {
  moderators: CommunityModeratorView[];
}

/**
 * Only mods can edit a community.
 */
export interface EditCommunity {
  community_id: string;
  title?: string;
  description?: string;
  icon?: string;
  banner?: string;
  nsfw?: boolean;
  posting_restricted_to_mods?: boolean;
  discussion_languages?: number[];
  auth: string;
}

export class DeleteCommunity {
  community_id: string;
  deleted: boolean;
  auth: string;
}

/**
 * Only admins can remove a community.
 */
export class RemoveCommunity {
  community_id: string;
  removed: boolean;
  reason?: string;
  /**
   * The expire time in Unix seconds
   */
  expires?: number;
  auth: string;
}

export class FollowCommunity {
  community_id: string;
  follow: boolean;
  auth: string;
}

export interface TransferCommunity {
  community_id: string;
  person_id: string;
  auth: string;
}

export interface BlockCommunity {
  community_id: string;
  block: boolean;
  auth: string;
}

export interface BlockCommunityResponse {
  community_view: CommunityView;
  blocked: boolean;
}
