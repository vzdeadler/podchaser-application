import axios, { AxiosPromise } from "axios";
import { PATH } from "../../../../utils/path";
import { PodcastInfoResponse } from "../interfaces/PodcastInfo.response";

export namespace PodcastService {

	/** */
	export const getPodcastInfoService = (_podcastUID: string): AxiosPromise<PodcastInfoResponse> => {

		return axios.get(PATH.getPath(PATH.PODCAST(_podcastUID)));
	};
};