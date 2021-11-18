import React from 'react'
import { getNameDay } from '../../../datas/Days/NameDays'
import CalendarNavContainer from './CalendarNavContainer'

import styles from './CalendarNavNameDays.scss'

interface ICalendarNameDaysProps {
  date: Date
}

export default function CalendarNavNameDays (props: ICalendarNameDaysProps): JSX.Element {
	const { date } = props

	const actualNameDays = getNameDay(date)

	const actualNameDayElems = actualNameDays.map((nameDay, i) => <div className={styles.actualNameDay} key={`actual-name-day-${ i }`} data-theme-color>{nameDay}</div>)

	const actualNameDaysText = `Névnap${ actualNameDays.length < 2 ? '' : 'ok' }`

	return <CalendarNavContainer header={actualNameDaysText} isEmptyHeader={false} hr={true} content={actualNameDayElems}/>
}
