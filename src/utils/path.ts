export const PATH = {
	getPath: (_path: string) => `${process.env.REACT_APP_PODCHASER_API}${_path}`,

	/** API PATHS */
	PODCASTS_LIST: 'userlists/27998',
	PODCAST: (_podcastID: string) => `podcasts/${_podcastID}`
}