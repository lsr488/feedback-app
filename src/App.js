import Header from './components/Header'
import FeedbackItem from './components/FeedbackItem'

// main app component
function App() {
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