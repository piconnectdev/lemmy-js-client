import {
  CommunityFollowerView,
  CommunityModeratorView,
  CommunityView,
  PersonViewSafe,
} from '../views';

export interface GetCommunity {
  id?: string;
  name?: string;
  auth?: string;
}

export interface GetCommunityResponse {
  community_view: CommunityView;
  moderators: CommunityModeratorView[];
  online: number;
}

export interface CreateCommunity {
  name: string;
  title: string;
  description?: string;
  icon?: string;
  banner?: string;
  nsfw?: boolean;
  auth: string;
}

export interface CommunityResponse {
  community_view: CommunityView;
}

export interface ListCommunities {
  type_?: string;
  sort?: string;
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
  remove_data?: boolean; // Removes/Restores their comments and posts for that community
  reason?: string;
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
  auth: string;
}

export interface DeleteCommunity {
  community_id: string;
  deleted: boolean;
  auth: string;
}

/**
 * Only admins can remove a community.
 */
export interface RemoveCommunity {
  community_id: string;
  removed: boolean;
  reason?: string;
  expires?: number;
  auth: string;
}

export interface FollowCommunity {
  community_id: string;
  follow: boolean;
  auth: string;
}

export interface GetFollowedCommunities {
  auth: string;
}

export interface GetFollowedCommunitiesResponse {
  communities: CommunityFollowerView[];
}

export interface TransferCommunity {
  community_id: string;
  person_id: string;
  auth: string;
}
