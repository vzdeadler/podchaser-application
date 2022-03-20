import './Button.scss';

interface ButtonProps {
	/** */
	style: 'primary' | 'secondary';
	/** */
	text: string;
}

const Button = (props: ButtonProps): JSX.Element => {

	/** */
	const { style, text } = props;

	return (
		<button className={`${style}`}>
			{text}
		</button>
	)
}

export default Button;