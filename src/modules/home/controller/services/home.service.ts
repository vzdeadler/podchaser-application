import axios, { AxiosPromise } from "axios";
import { PATH } from "../../../../utils/path";
import { PodcastsListResponse } from "../interfaces/PodcastsList.response";

export namespace HomeService {

	/** */
	export const getPodcastsListService = (): AxiosPromise<PodcastsListResponse> => {

		return axios.get(PATH.getPath(PATH.PODCASTS_LIST));
	};
};