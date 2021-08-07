export interface CourseReview {
	id: number
	profile_id: string
	course_id: number
	rate: number
	title?: string
	content?: string
}

export interface Course {
	id: number
	title: string
	url: string
	author: string
	tags: string[]
	main_topic: string
	free: boolean
	platform_id?: number
	language: string
	reviews?: CourseReview[]
	platform?: Platform
}

export interface Platform {
	id: number
	name: string
	url: string
}

export interface Profile {
	id: string
	first_name?: string
	last_name?: string
	bio?: string
	website?: string
	username?: string
}
