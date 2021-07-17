export interface UserJoin {
  auth: string;
}

export interface UserJoinResponse {
  joined: boolean;
}

/**
 * The main / frontpage community is `community_id: 0`.
 */
export interface CommunityJoin {
  community_id: string;
}

export interface CommunityJoinResponse {
  joined: boolean;
}

export interface ModJoin {
  community_id: string;
}

export interface ModJoinResponse {
  joined: boolean;
}

export interface PostJoin {
  post_id: string;
}

export interface PostJoinResponse {
  joined: boolean;
}
