import PodcastCard from '../../../core/components/molecules/PodcastCard/PodcastCard';
import PodcastActions from './molecules/PodcastActions/PodcastActions';
import PodcastDescription from './molecules/PodcastDescription/PodcastDescription';
import PodcastHeader from './molecules/PodcastHeader/PodcastHeader';
import './Podcast.scss';

const PodcastPage = (): JSX.Element => {

	return (
		<div id='podcast-container'>
			<div className='content-side'>
				<PodcastHeader image={'https://tizza.co/wp-content/uploads/2020/07/Podcast.jpg'} title={'How I Built This'} episodes={0} rating={0} />
				<PodcastDescription description='' />

				<h2>Recent Episodes</h2>

				<PodcastCard image='' title='' date='' description=''/>
			</div>

			<PodcastActions follower={201000} rates={200}/>
		</div>
	)
}

export default PodcastPage;