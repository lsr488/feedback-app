import React, { useState, useContext, useEffect } from 'react';
import RatingSelect from './RatingSelect';
import Card from './shared/Card';
import Button from './shared/Button';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {
	const [text, setText] = useState('');
	const [rating, setRating] = useState('');
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [message, setMessage] = useState('');

	const {addFeedback, feedbackEditState, updateFeedback} = useContext(FeedbackContext);

	useEffect(() => {
		if(feedbackEditState.edit === true) {
			setBtnDisabled(false);
			setText(feedbackEditState.item.text);
			setRating(feedbackEditState.item.rating);
		}
	}, [feedbackEditState]);

	const handleTextChange = (e) => {
		if(text === '') {
			setBtnDisabled(true);
			setMessage(null);
		} else if(text !== '' && text.trim().length <= 10) {
			setBtnDisabled(true);
			setMessage('Text must be at least 10 characters.');			
		} else {
			setMessage(null);
			setBtnDisabled(false);
		}

		setText(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if(text.trim().length > 10) {
			const newFeedback = {
				text,
				rating
			}

			if(feedbackEditState.edit === true) {
				updateFeedback(feedbackEditState.item.id, newFeedback);
			} else {
				addFeedback(newFeedback);
			}

			setText('');
		}
	}

	return <Card>
		<form onSubmit={handleSubmit}>
			<h2>How would you rate your experience?</h2>
			<RatingSelect select={(rating) => setRating(rating)} />
			<div className='input-group'>
				<input 
					onChange={handleTextChange} 
					type='text' 
					placeholder='Write a review' 
					value={text} />
				<Button type='submit' isDisabled={btnDisabled}>Send</Button>
			</div>

			{message && <div className='message'>{message}</div>}
		</form>
	</Card>
}

export default FeedbackForm;