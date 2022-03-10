import {useContext} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList() {
	const { feedback, isLoading } = useContext(FeedbackContext);

	if(!isLoading && (!feedback || feedback.length === 0)) {
		return <p>No Feedback Yet</p>
	}

	// with loading spinner
	return isLoading ? <h3>Loading...</h3> : (
		// WITH fade-in/fade-out animation
		<div className='feedback-list'>
		<AnimatePresence>
				{feedback.map((item) => (
					<motion.div 
						key={item.id}
						initial={{opacity: 0}}
						animate={{opacity: 1}}
						exit={{opacity: 0}}
					>
						<FeedbackItem key={item.id} item={item} />
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	)

	
// WITHOUT animation
	// return (
	// 	<div className='feedback-list'>
	// 		{feedback.map((item) => (
	// 			<FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
	// 		))}
	// 	</div>
	// 	);
}

export default FeedbackList;