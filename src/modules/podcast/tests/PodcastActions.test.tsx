import * as ReactDOM from 'react-dom';
import PodcastActions from '../ui/molecules/PodcastActions/PodcastActions';

describe('Testing PodcastActions Components.', () => {

	let container: HTMLDivElement;

	container = document.createElement('div');
	document.body.appendChild(container);
	const followers: string = '500k';
	const rates: number = 200;

	ReactDOM.render(<PodcastActions follower={followers} rates={rates} />, container);

	/** */
	it('Renders correctly PodcastActions component', () => {
		const buttons = container.querySelectorAll('button');
		expect(buttons).toHaveLength(2);
		expect(buttons[0].textContent).toBe('Follow');
		expect(buttons[1].textContent).toBe('Rate');

		const paragraph = container.querySelectorAll('p');
		expect(paragraph).toHaveLength(1);
		expect(paragraph[0].textContent).toBe('500k followers • 200 ratings');
	});
})
