import { Episode } from "../../../../core/classes/Epidose";
import { Podcast } from "../../../../core/classes/Podcast";
import { TRANSFORM } from "../../../../utils/transform";
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

		if(_response.latest_episode){
			let _episode: Episode = new Episode();
			_episode.uid = _response.latest_episode.id.toString();
			_episode.title = _response.latest_episode.title;
			_episode.description = 'Episode description';
			_episode.date = TRANSFORM.DATE.getDateFromAPI(_response.latest_episode.air_date);

			_podcast.episodes.push(_episode);
		}

		return _podcast;
	}
};