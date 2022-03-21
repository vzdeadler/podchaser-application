import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.scss';
import HomePage from './modules/home/ui/Home';
import MainPage from './modules/main/ui/Main';
import PodcastPage from './modules/podcast/ui/Podcast';
import { ROUTES } from './utils/routes';

const App = (): JSX.Element => {
	return (
    <div id="app">
			<Router>
				<Routes>
					<Route path='/' element={<MainPage />}>
						<Route path={ROUTES.HOME_PATH} element={<HomePage />} />
						<Route path={ROUTES.PODCAST_PATH} element={<PodcastPage />} />
					</Route>
				</Routes>
			</Router>
    </div>
  );
}

export default App;
