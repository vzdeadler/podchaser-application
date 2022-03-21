import { Podcast } from "../../../../core/classes/Podcast";
import { PodcastInfoResponse } from "../interfaces/PodcastInfo.response";

export namespace PodcastAdapter {

	export const PodcastResponseAdapter = (_response: PodcastInfoResponse): Podcast => {
		let _podcast: Podcast = new Podcast();

		_podcast.title = _response.title;
		_podcast.description = _response.description;
		_podcast.episodesNumber = _response.number_of_episodes;
		_podcast.image = _response.image_url;
		_podcast.rating = _response.rating;
		_podcast.ratingCount = _response.rating_count;

		return _podcast;
	}
};