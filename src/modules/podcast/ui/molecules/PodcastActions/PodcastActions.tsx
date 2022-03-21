import Button from '../../../../../core/components/atoms/Button/Button';
import './PodcastActions.scss';

interface PodcastActionsProps {
	/** */
	follower: string;
	/** */
	rates: number;
}

/** */
const PodcastActions = (props: PodcastActionsProps): JSX.Element => {

	/** */
	const { follower, rates } = props;
	
	return (
		<div className='podcast-actions-container'>
			<Button style='primary' text='Follow'></Button>
			<Button style='secondary' text='Rate'></Button>

			<p>{follower} followers • {rates} ratings</p>
		</div>
	)
};

export default PodcastActions;