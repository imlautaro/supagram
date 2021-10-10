export interface Follow {
	follower: string
	followed: string
	created_at: string
}

export interface Like {
	post: number
	author: string
}

export interface Post {
	id: number
	created_at: string
	content: string
	author: Profile
}

export interface Profile {
	id: string
	created_at: string
	biography: string
	nickname: string
}
