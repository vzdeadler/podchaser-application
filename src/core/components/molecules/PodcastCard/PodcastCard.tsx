import './PodcastCard.scss';

interface PodcastCardProps {
	/** */
	image: string;
	/** */
	title: string;
	/** */
	date: string;
	/** */
	description: string;
}

const PodcastCard = (props: PodcastCardProps): JSX.Element => {

	/** */
	const { image, title, date, description } = props;

	return (
		<div className='podcast-card-container'>
			<img src={image} />
			
			<div className='content'>
				<h3>{title}</h3>
				<p>{date} · {description}</p>
			</div>
		</div>
	)
};

export default PodcastCard;