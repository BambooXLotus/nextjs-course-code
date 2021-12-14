import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

const MeetupList = (props) => {
	return (
		<ul className={classes.list}>
			{props.meetups.map((item) => {
				return <MeetupItem key={item.id} meetup={item}></MeetupItem>;
			})}
		</ul>
	);
};

export default MeetupList;
