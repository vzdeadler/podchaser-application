import * as ReactDOM from 'react-dom';
import PodcastHeader from '../ui/molecules/PodcastHeader/PodcastHeader';

describe('Testing PodcastHeader Components.', () => {

	let container: HTMLDivElement;

	const image: string = '';
	const title: string = 'Example title';
	const episodes: number = 200
	const rating: number = 4;

	container = document.createElement('div');
	document.body.appendChild(container);

	ReactDOM.render(<PodcastHeader image={image} title={title} episodes={episodes} rating={rating} />, container);

	/** */
	it('Renders correctly PodcastHeader component', () => {
		const image = container.querySelector('image');
		expect(image).toBeNull();

		const divs = container.querySelectorAll('div');
		expect(divs).toHaveLength(1);

		const h1 = container.querySelector('h1');
		expect(h1!.textContent).toBe(title);

		const p = container.querySelector('p');
		expect(p!.textContent).toBe(`A podcast with ${episodes} episodes`);
	});
})
