import { Podcast } from "../../../../core/classes/Podcast";
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
	
				const _date: string = _item.entity.created_at.split(' ')[0];
				const _year: number = +(_date.split('-')[0]);
				const _month: number = +(_date.split('-')[1]) - 1;
				const _day: number = +(_date.split('-')[2]);
	
				const date: Date = new Date(_year, _month, _day);
	
				_podcast.date = date;
	
				_podcasts.push(_podcast);
			}

		})

		return _podcasts;
	}
};