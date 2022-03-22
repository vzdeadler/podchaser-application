export interface PodcastInfoResponse {
	id: number,
	number_of_episodes: number,
	title: string,
	description: string,
	image_url: string,
	rating_count: number,
	rating: number,
	latest_episode: {
		air_date: string,
		id: number,
		title: string,
	}
}