import Header from './components/Header'
import FeedbackItem from './components/FeedbackItem'
import FeedbackData from './data/FeedbackData'

// main app component
function App() {
	const [feedback, setFeedback] = useState(FeedbackData)
	return (
		<>
			<Header />
			<div className="container">
				<FeedbackItem />
			</div>
		</>
	)
}

export default App