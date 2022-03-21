import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Podcast } from "../../../../core/classes/Podcast";
import { ROUTES } from "../../../../utils/routes";
import { HomeAdapter } from "../adapters/home.adapter";
import { HomeService } from "../services/home.service";

export namespace HomeFacade {

	/** */
	export const useHomeFacade = () => {
		/** */
		const [podcasts, updatePodcasts] = useState<Podcast[]>([]);
		const [isLoading, updateIsLoading] = useState<boolean>(false);
		/** */
		const navigate = useNavigate();

		/** */
		const getPodcastList = async() => {
			updateIsLoading(true);

			try {
				const { data } = await HomeService.getPodcastsListService();
				const podcastsList = HomeAdapter.PodcastsListResponseAdapter(data);
				
				updatePodcasts(podcastsList);
			} catch (e){
				console.error(e);
				throw(e);
			} finally {
				updateIsLoading(false);
			}
		};

		/** */
		const onPodcastClick = (_selectedPodcast: Podcast) => {
			const podcastUID: string = _selectedPodcast.uid.toString();
			navigate(ROUTES.PODCAST(podcastUID));
		};

		/** */
		useEffect(() => {
			getPodcastList();
		}, []);

		//return { podcasts, onPodcastClick };
		return { isLoading, podcasts, onPodcastClick };
	}

}