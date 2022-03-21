import * as ReactDOM from 'react-dom';
import PodcastDescription from '../ui/molecules/PodcastDescription/PodcastDescription';

describe('Testing PodcastDescription Components.', () => {

	let container: HTMLDivElement;
	const description: string = 'Lorem ipsum dolot sit amet.';

	container = document.createElement('div');
	document.body.appendChild(container);

	ReactDOM.render(<PodcastDescription description={description} />, container);

	/** */
	it('Renders correctly PodcastDescription component', () => {
		const p = container.querySelector('p');
		expect(p!).toBeInTheDocument();
		expect(p!.textContent).toBe(description);
	});
})
