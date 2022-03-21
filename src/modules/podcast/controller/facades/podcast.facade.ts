import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Podcast } from "../../../../core/classes/Podcast";
import { PodcastAdapter } from "../adapter/podcast.adapter";
import { PodcastService } from "../services/podcast.service";

export namespace PodcastFacade {

	/** */
	export const usePodcastFacade = () => {
		/** */
		const [podcast, updatePodcast] = useState<Podcast>();
		const [followers, updateFollowers] = useState<string>('');
		const [isLoading, updateIsLoading] = useState<boolean>(false);
		/** */
		const { uid } = useParams();

		/** */
		const getPodcastInfo = async(_podcastUID: string) => {
			updateIsLoading(true);

			try {
				const { data } = await PodcastService.getPodcastInfoService(_podcastUID);
				const podcast = PodcastAdapter.PodcastResponseAdapter(data);
				
				updatePodcast(podcast);
			} catch (e){
				console.error(e);
				throw(e);
			} finally {
				updateIsLoading(false);
			}
		};

		/** */
		const getRandomFollowers = () => {
			const followersNumber: number = Math.random() * 500000;
			const followersText: string = followersNumber > 1000 ? `${Math.floor(followersNumber / 1000)}k` : `${followers}`;
			updateFollowers(followersText);
		};

		/** */
		useEffect(() => {
			if(uid)
				getPodcastInfo(uid);
		}, [uid]);

		/** */
		useEffect(() => {
			getRandomFollowers();
		}, []);

		return { isLoading, podcast, followers };
	}

}