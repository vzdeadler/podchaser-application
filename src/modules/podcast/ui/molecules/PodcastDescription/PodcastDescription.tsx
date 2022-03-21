import './PodcastDescription.scss';

interface PodcastDescriptionProps {
	/** */
	description: string;
}

/** */
const PodcastDescription = (props: PodcastDescriptionProps): JSX.Element => {

	/** */
	const { description } = props;
	
	return (
		<p className='podcast-description'>
			{description}
		</p>
	)
};

export default PodcastDescription;