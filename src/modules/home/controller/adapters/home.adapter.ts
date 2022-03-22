import { Podcast } from "../../../../core/classes/Podcast";
import { TRANSFORM } from "../../../../utils/transform";
import { PodcastsListResponse } from "../interfaces/PodcastsList.response";

export namespace HomeAdapter {

	export const PodcastsListResponseAdapter = (_response: PodcastsListResponse): Podcast[] => {
		let _podcasts: Podcast[] = [];

		_response.list.items.forEach(_item => {
			if(_item.entity && _item.entity.id){
				let _podcast: Podcast = new Podcast();

				_podcast.uid = _item.entity.id;
				_podcast.title = _item.entity.title;
				_podcast.description = _item.entity.description;
				_podcast.image = _item.entity.image_url;
	
				_podcast.date = TRANSFORM.DATE.getDateFromAPI(_item.entity.created_at);
	
				_podcasts.push(_podcast);
			}

		})

		return _podcasts;
	}
};