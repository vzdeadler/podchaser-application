import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import HomePage from '../ui/Home';

describe('Testing Home Page.', () => {
	let container: HTMLDivElement;

	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
		ReactDOM.render(
			<BrowserRouter>
				<HomePage />
			</BrowserRouter>
		, container);
	});

	afterEach(() => {
		document.body.removeChild(container);
		container.remove();
	});

	it('Renders correctly Home Page Component', () => {
		const title = container.querySelectorAll('h1');
		expect(title).toHaveLength(1);
		expect(title[0].textContent).toBe('All Podcasts');

		const paragraph = container.querySelectorAll('p');
		expect(paragraph).toHaveLength(1);
		expect(paragraph[0].textContent).toBe('Browse the details of every podcast, ever.');
	});
});