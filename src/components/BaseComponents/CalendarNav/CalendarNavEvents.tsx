import React from 'react'

import styles from './CalendarNavEvents.scss'

interface IEvent {
  name: string
  time: `${ number }:${ number }`
}

interface ICalendarNavEventsProps {
  events: Array<IEvent>
}

export default function CalendarNavEvents(props: ICalendarNavEventsProps): PlannerElement {
	const eventsText = <div className={styles.calendarNavEventsText}  data-theme-color>{props.events.length} <span>Esemény</span></div>
	return (
		<div className={ styles.calendarNavEventsContainer }>
			{eventsText}
		</div>
	)
}
