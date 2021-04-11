import React from 'react'
import { getNameDay } from '../../../datas/Days/NameDays'
import CalendarNavContainer from './CalendarNavContainer'

import './CalendarNavNameDays.scss'

interface ICalendarNameDaysProps {
  date: Date
}

export default function CalendarNavNameDays (props: ICalendarNameDaysProps): JSX.Element {
	const actualNameDays = getNameDay(props.date)

	const actualNameDayElems = actualNameDays.map((nameDay, i) => <div className="actual-name-day" key={i}>{nameDay}</div>)

	const actualNameDaysText = actualNameDays.length < 2 ? 'Névnap' : 'Névnapok'

	return <CalendarNavContainer header={actualNameDaysText} isEmptyHeader={false} hr={true} content={actualNameDayElems}/>
}
