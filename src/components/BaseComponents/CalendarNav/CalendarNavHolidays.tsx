import React from 'react'
import { IHoliday } from '../../../datas/Days/Holidays'
import CalendarNavContainer from './CalendarNavContainer'

import './CalendarNavHolidays.scss'

interface ICalendarHolidaysProps {
  events: IHoliday[]
}

export default function CalendarHolidays(props: ICalendarHolidaysProps): JSX.Element {
	const hasEvents = Boolean(props.events && props.events.length > 0)
	const holidaysHeader = !hasEvents ? 'Ezen a napon nincs ünnep' : (props.events.length === 1 ? 'Ünnep' : `Ünnepek (${props.events.length})`)

	const holidayContents = props.events.map((event, i) => <div className="calendar-holiday-item" key={`calendar-holiday-${i}`}>{event.event.name}</div>)

	return <CalendarNavContainer header={holidaysHeader} isEmptyHeader={ !hasEvents } hr={hasEvents} content={holidayContents}/>
}
