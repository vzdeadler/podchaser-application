import './PodcastHeader.scss';
import { AiTwotoneStar } from 'react-icons/ai';

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
	const stars: number[] = [1, 2, 3, 4, 5];
	const { image, title, episodes, rating } = props;
	
	return (
		<section className='podcast-header-container'>
			<img src={image} />

			<div>
				<h1 className={ title.length > 25 ? 'medium-text' : ''}>{title}</h1>
				<p>A podcast with {episodes} episodes</p>
				<div className='stars-wrapper'>
					{
						stars.map((star) => {
							return <AiTwotoneStar className={star <= rating ? 'active' : ''}/>
						})
					}
				</div>
			</div>
		</section>
	)
};

export default PodcastHeader;