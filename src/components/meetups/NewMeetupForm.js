import React, { useState, useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

const NewMeetupForm = (props) => {
	const titleInputRef = useRef(null);
	const addressInputRef = useRef(null);
	const descriptionInputRef = useRef(null);

	const [selectedFile, setSelectedFile] = useState(null);

	const fileSelectedHandler = (event) => {
		setSelectedFile(event.target.files[0]);
	};

	const submitHandler = (event) => {
		event.preventDefault();

		const title = titleInputRef.current.value;
		const address = addressInputRef.current.value;
		const description = descriptionInputRef.current.value;

		const meetup = {
			title: title,
			image: selectedFile,
			address: address,
			description: description,
		};

		props.onAddMeetup(meetup);
	};

	return (
		<Card>
			<form className={classes.form} onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor='title'>Title</label>
					<input type='text' required id='title' ref={titleInputRef}></input>
				</div>
				<div className={classes.control}>
					<label htmlFor='image'>Image</label>
					<input type='file' required id='image' onChange={fileSelectedHandler}></input>
				</div>
				<div className={classes.control}>
					<label htmlFor='title'>Address</label>
					<input type='text' required id='address' ref={addressInputRef}></input>
				</div>
				<div className={classes.control}>
					<label htmlFor='title'>Description</label>
					<textarea required id='description' rows='5' ref={descriptionInputRef}></textarea>
				</div>
				<div className={classes.actions}>
					<button>Add Meetup</button>
				</div>
			</form>
		</Card>
	);
};

export default NewMeetupForm;
