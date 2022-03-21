import { ASSETS } from '../../../../utils/assets';
import { ROUTES } from '../../../../utils/routes';
import Link from '../../atoms/Link/Link';
import './Header.scss';

const Header = (): JSX.Element => {

	return (
		<header>
			<Link route={ROUTES.HOME_PATH}>
				<div className='podchaser-logo' style={ { backgroundImage: `url(${ASSETS.PODCHASER_LOGO})` } }></div>
			</Link>
		</header>
	)
};

export default Header;