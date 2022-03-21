export const ROUTES = { 
	/** */
	HOME_PATH: '',
	/** */
	PODCAST: (_podcastUID: string) => `podcast/${_podcastUID}`,
	PODCAST_PATH: 'podcast/:uid',
};