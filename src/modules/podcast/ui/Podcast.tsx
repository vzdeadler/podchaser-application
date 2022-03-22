import PodcastCard from '../../../core/components/molecules/PodcastCard/PodcastCard';
import { TRANSFORM } from '../../../utils/transform';
import { PodcastFacade } from '../controller/facades/podcast.facade';
import PodcastActions from './molecules/PodcastActions/PodcastActions';
import PodcastDescription from './molecules/PodcastDescription/PodcastDescription';
import PodcastHeader from './molecules/PodcastHeader/PodcastHeader';
import './Podcast.scss';

const PodcastPage = (): JSX.Element => {

	const { isLoading, podcast, followers } = PodcastFacade.usePodcastFacade();

	return (
		<div id='podcast-container'>
			<div className='content-side'>
				{
					isLoading && (
						<p>Loading...</p>
					)
				}

				{
					!isLoading && podcast && (
						<>
							<PodcastHeader image={podcast!.image} title={podcast!.title} episodes={podcast!.episodesNumber} rating={podcast!.rating} />
							<PodcastDescription description={podcast!.description} />
						</>
					)
				}

				{
					podcast && podcast.episodes.length > 0 && (
						<>
							<h2>Recent Episodes</h2>

							{
								podcast.episodes.map((episode) => {
									return (
										<PodcastCard 
											image={podcast.image} 
											title={episode.title} 
											date={TRANSFORM.DATE.getCardinalFormattedDate(episode.date!)} 
											description={episode.description} 
										/>
									);
								})
							}
						</>
					)
				}
			</div>

			<PodcastActions follower={followers} rates={200}/>
		</div>
	)
}

export default PodcastPage;