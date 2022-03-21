import { Outlet } from "react-router-dom";
import Header from "../../../core/components/organisms/Header/Header";

import './Main.scss';

const MainPage = (): JSX.Element => {

	return (
		<div id="main-container">
			<Header />

			<div className="router-container">
				<Outlet />
			</div>
		</div>
	)
}

export default MainPage;