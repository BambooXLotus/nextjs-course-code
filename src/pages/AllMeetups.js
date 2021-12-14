import axios from 'axios';
import { useEffect, useState } from 'react';

import MeetupList from '../components/meetups/MeetupList';

const AllMeetupPage = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [meetups, setMeetups] = useState([]);

	useEffect(() => {
		setIsLoading(true);
		axios
			.get('https://deren-test.firebaseio.com/meetups.json')
			.then((response) => {
				return response.data;
			})
			.then((data) => {
				const meetupData = [];

				for (const key in data) {
					const meetup = {
						id: key,
						...data[key],
					};

					meetupData.push(meetup);
				}
				setIsLoading(false);
				setMeetups(meetupData);
			});
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	} else {
		return (
			<section>
				<h1>All Meetups</h1>
				<MeetupList meetups={meetups}></MeetupList>
			</section>
		);
	}
};
export default AllMeetupPage;
