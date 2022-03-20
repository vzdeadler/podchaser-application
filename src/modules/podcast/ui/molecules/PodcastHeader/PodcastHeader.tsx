import './PodcastHeader.scss';

interface PodcastHeaderProps {
	/** */
	image: string;
	/** */
	title: string;
	/** */
	episodes: number;
	/** */
	rating: number;
}

/** */
const PodcastHeader = (props: PodcastHeaderProps): JSX.Element => {

	/** */
	const { image, title, episodes, rating } = props;
	
	return (
		<section className='podcast-header-container'>
			<img src={image} />

			<div>
				<h1>{title}</h1>
				<p>A podcast with {episodes} episodes</p>
			</div>
		</section>
	)
};

export default PodcastHeader;