import React from "react"
import ReactDOM from "react-dom"
import { Container } from "@material-ui/core"

import Calendar from './components/Calendar/Calendar'

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
		<App />
	</React.StrictMode>,
	document.getElementById("root")
)
