import React from 'react'

import './CalendarNavContainer.scss'

interface ICalendarNavContainerProps {
  header: string | JSX.Element,
  isEmptyHeader: boolean,
  hr: boolean,
  content: JSX.Element | JSX.Element[]
}

export default function CalendarNavContainer(props: ICalendarNavContainerProps): JSX.Element {
	const headerTextClassList = props.isEmptyHeader ? 'calendar-nav-header calendar-nav-header-empty' : 'calendar-nav-header'

	return (
		<div className="calendar-nav-container">
			<div className={headerTextClassList}>
				{ props.header }
			</div>
			{props.hr ? <hr/ > : ''}
			<div className="calendar-nav-content">
				{props.content}
			</div>
		</div>
	)
}
