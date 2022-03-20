import React, { PropsWithChildren } from 'react';
import './Link.scss';

interface LinkProps {
	/** */
	route: string;
	/** */
	children: React.ReactNode;
}

const Link = (props: LinkProps): JSX.Element => {

	const { route, children } = props; 

	return (
		<a href={route}>
			{props.children}
		</a>
	)
}

export default Link;