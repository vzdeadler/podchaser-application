import PodcastCard from '../../../core/components/molecules/PodcastCard/PodcastCard';

import './Home.scss';

const HomePage = (): JSX.Element => {

	return (
		<div id='home-container'>
			<h1>All Podcasts</h1>
			<p>Browse the details of every podcast, ever.</p>

			<PodcastCard
				image={'https://tizza.co/wp-content/uploads/2020/07/Podcast.jpg'}
				title={'Podcast title'}
				date={'May 1st, 2021'}
				description={'Podcast description'}
			/>

			<PodcastCard
				image={'https://tizza.co/wp-content/uploads/2020/07/Podcast.jpg'}
				title={'Podcast title'}
				date={'May 1st, 2021'}
				description={'Podcast description'}
			/>

			<PodcastCard
				image={'https://tizza.co/wp-content/uploads/2020/07/Podcast.jpg'}
				title={'Podcast title'}
				date={'May 1st, 2021'}
				description={'Podcast description'}
			/>

			<PodcastCard
				image={'https://tizza.co/wp-content/uploads/2020/07/Podcast.jpg'}
				title={'Podcast title'}
				date={'May 1st, 2021'}
				description={'Podcast description'}
			/>

		</div>
	)
}

export default HomePage;