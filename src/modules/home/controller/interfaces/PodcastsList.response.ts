export interface PodcastsListResponse {
	additional_entities: any,
	list: {
		items: {
			entity: {
				created_at: string,
				image_url: string,
				id: number,
				description: string,
				title: string
			}
			id: number,
			position: number
		}[]
	}
}