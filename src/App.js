import React, { useState } from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

// main app component
function App() {
	const [feedback, setFeedback] = useState(FeedbackData);

	const addFeedback = (newFeedback) => {
		console.log(newFeedback);
	}

	const deleteFeedback = (id) => {
		// if(window.confirm('Are you sure you want to delete this item?')) {
			setFeedback(feedback.filter((item) => item.id !== id));
		// }
	}

	return (
		<>
			<Header />
			<div className="container">
			<FeedbackForm handleAdd={addFeedback} />
			<FeedbackStats feedback={feedback} />
				<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
			</div>
		</>
	);
}

export default App;