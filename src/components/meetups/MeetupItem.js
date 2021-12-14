import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

const MeetupItem = (props) => {
	const meetup = props.meetup;

	return (
		<li className={classes.item}>
			<Card>
				<div>
					<img className={classes.image} src={meetup.image} alt={meetup.title}></img>
				</div>
				<div className={classes.content}>
					<h3>{meetup.title}</h3>
					<address>{meetup.address}</address>
					<p>{meetup.description}</p>
				</div>
				<div className={classes.actions}>
					<button>To Favorites</button>
				</div>
			</Card>
		</li>
	);
};

export default MeetupItem;
