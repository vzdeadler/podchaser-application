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

			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas rutrum tincidunt elit, sit amet egestas mauris elementum at. Curabitur dapibus vitae turpis et vehicula. Aliquam dolor lorem, rhoncus vel tortor non, ornare aliquam velit. Sed consectetur magna id felis tempor, sit amet aliquet enim ullamcorper. Donec eget massa magna. Cras luctus tincidunt elementum. Duis pretium, lorem in porta laoreet, tellus purus mollis mauris, id aliquam felis ligula nec enim. Quisque a est vel augue rutrum consequat nec id metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
		</p>
	)
};

export default PodcastDescription;