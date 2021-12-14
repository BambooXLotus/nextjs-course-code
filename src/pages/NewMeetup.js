import axios from 'axios';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { useHistory } from 'react-router-dom';

import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
	const history = useHistory();

	const addMeetupHandler = (meetup) => {
		const storage = getStorage();
		const imageRef = ref(storage, `images/${meetup.image.name}`);

		uploadBytes(imageRef, meetup.image).then((snapshot) => {
			getDownloadURL(imageRef).then((url) => {
				meetup.image = url;
				axios.post('https://deren-test.firebaseio.com/meetups.json', meetup).then((response) => {
					history.goBack();
				});
			});
		});
	};

	return (
		<section>
			<h1>Add New Meetup</h1>
			<NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
		</section>
	);
};

export default NewMeetupPage;
