import React from 'react'
import { getActualDay, getDayName } from '../../../datas/Days/Days'
import { IHoliday } from '../../../datas/Days/Holidays'
import { getMonthName } from '../../../datas/Days/Months'
import CalendarNavHolidays from './CalendarNavHolidays'
import CalendarNavNameDays from './CalendarNavNameDays'

import './CalendarNav.scss'

interface ICalendarNavProps {
  date: Date
	events: IHoliday[]
}

export default function CalendarNav(props: ICalendarNavProps): JSX.Element {

	const actualDayName = getActualDay(props.date)

	const dayName = getDayName(props.date)
	const monthName = getMonthName(props.date)

	const dateMonthNameText = `${ monthName } ${ props.date.getDate() }`

	return (
		<div className="calendar-nav">
			<div className="actual-date-container">
				{actualDayName}
			</div>
			<div className="date-container">
				<div className="date-day-name">
					{ dayName },
				</div>
				<div className="date-month-name">
					{ dateMonthNameText }
				</div>
			</div>
			<CalendarNavNameDays date={props.date}/>
			<CalendarNavHolidays events={ props.events }/>
	  </div>
	)
}
