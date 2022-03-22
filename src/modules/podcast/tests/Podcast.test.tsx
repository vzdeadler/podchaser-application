import * as ReactDOM from 'react-dom';
import PodcastPage from '../ui/Podcast';

describe('Testing Podcast Page.', () => {

	let container: HTMLDivElement;

	container = document.createElement('div');
	document.body.appendChild(container);
	ReactDOM.render(<PodcastPage />, container);

	/** */
	it('Renders correctly Podcast Page Component', () => {
		// const title = container.querySelectorAll('h1');
		// expect(title).toHaveLength(1);
		// expect(title[0].textContent).toBe('All Podcasts');

		// const paragraph = container.querySelectorAll('p');
		// expect(paragraph).toHaveLength(1);
		// expect(paragraph[0].textContent).toBe('Browse the details of every podcast, ever.');
	});
})
