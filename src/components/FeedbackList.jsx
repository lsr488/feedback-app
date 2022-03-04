function FeedbackList({ feedback }) {
	console.log(feedback)
	
	if(!feedback || feedback.length === 0) {
		return <p>No Feedback Yet</p>
	}
	return <div className='feedback-list'>
		{feedback.map((item) => {
			<div>{item.rating}</div>
		})}
	</div>
}

export default FeedbackList