import PodcastCard from '../../../core/components/molecules/PodcastCard/PodcastCard';
import { TRANSFORM } from '../../../utils/transform';
import { HomeFacade } from '../controller/facades/home.facade';

import './Home.scss';

const HomePage = (): JSX.Element => {
	/** */
	const { isLoading, podcasts, onPodcastClick } = HomeFacade.useHomeFacade();

	return (
		<div id='home-container'>
			<h1>All Podcasts</h1>
			<p>Browse the details of every podcast, ever.</p>

			{
				isLoading && (
					<p>Loading..</p>
				)
			}

			{
				!isLoading && podcasts.map(podcast => {
					return <PodcastCard
						key={podcast.uid}
						image={podcast.image}
						title={podcast.title}
						date={TRANSFORM.DATE.getCardinalFormattedDate(podcast.date!)}
						description={podcast.description}
						onClick={() => onPodcastClick(podcast)}
					/>
				})
			}
		</div>
	)
}

export default HomePage;