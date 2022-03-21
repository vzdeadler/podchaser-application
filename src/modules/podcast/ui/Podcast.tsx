import PodcastCard from '../../../core/components/molecules/PodcastCard/PodcastCard';
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

				{/* <h2>Recent Episodes</h2>

				<PodcastCard image='' title='' date='' description=''/> */}
			</div>

			<PodcastActions follower={followers} rates={200}/>
		</div>
	)
}

export default PodcastPage;