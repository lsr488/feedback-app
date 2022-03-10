import {createContext, useState, useEffect} from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
	const [isLoading, setIsLoading] = useState(true);

	const [feedback, setFeedback] = useState([]);

	const [feedbackEditState, setFeedbackEditState] = useState({
		item: {},
		edit: false
	});

	useEffect(() => {
		fetchFeedback();
	}, []);

	// fetch feedback
	const fetchFeedback = async () => {
		const response = await fetch('/feedback?_sort=id&_order=desc');
		const data = await response.json();

		setFeedback(data);

		setIsLoading(false);
	}

	// add feedback
	const addFeedback = async (newFeedback) => {
		// add via the backend
		const response = await fetch('/feedback', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(newFeedback)
		});

		const data = await response.json();

		setFeedback([data, ...feedback]);
	}

	// delete feedback
	const deleteFeedback = (id) => {
		// if(window.confirm('Are you sure you want to delete this item?')) {
			setFeedback(feedback.filter((item) => item.id !== id));
		// }
	}

	// update feedback item
	const updateFeedback = (id, updItem) => {
		setFeedback(
			feedback.map((item) => (item.id === id ? {...item, ...updItem} : item))
		);
	}

	// set item to be updated
	const editFeedback = (item) => {
		setFeedbackEditState({
			item,
			edit: true
		});
	}

	return <FeedbackContext.Provider value={{
			feedback,
			feedbackEditState,
			isLoading,
			updateFeedback,
			deleteFeedback,
			addFeedback,
			editFeedback
		}}
	>
		{children}
	</FeedbackContext.Provider>
}

export default FeedbackContext;