import React from "react"
import ReactDOM from "react-dom"

import Calendar from './components/Calendar/Calendar'
import Home from "./pages/Home"

import './styles.scss'

function App(): JSX.Element {
	// Az aktuális nap
	const today = new Date()

	return (
		<Calendar
			year={today.getFullYear()}
			month={today.getMonth()}
			key={`${today.getFullYear()}.${today.getMonth()}`}
		/>
	)
}

ReactDOM.render(
	<React.StrictMode>
		<Home />
	</React.StrictMode>, document.getElementById("root")
)
