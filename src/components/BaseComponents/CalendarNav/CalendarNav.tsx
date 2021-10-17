import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'

import { getActualDay, getDayName } from '../../../datas/Days/Days'
import { IHoliday } from '../../../datas/Days/Holidays'
import { getMonthName } from '../../../datas/Days/Months'
import CalendarNavHolidays from './CalendarNavHolidays'
import CalendarNavNameDays from './CalendarNavNameDays'
import CalendarAddButton from '../CalendarAddButton/CalendarAddButton'
import CalendarNavEvents from './CalendarNavEvents'

import styles from './CalendarNav.scss'
import CalendarNavColorPicker from './CalendarNavColorPicker'

interface ICalendarNavProps {
  date: Date
	events: Array<IHoliday>
}

export default function CalendarNav(props: ICalendarNavProps): JSX.Element {

	const actualDayName = getActualDay(props.date)

	const dayName = getDayName(props.date)
	const monthName = getMonthName(props.date)

	const dateMonthNameText = `${ monthName } ${ props.date.getDate() }`

	return (
		<div className={styles.calendarNav}>
			<div className={styles.actualDateContainer} data-theme-color>
				{actualDayName}
				<CalendarNavColorPicker />
			</div>
			<div className={styles.dateContainer}>
				<div className={styles.dateDayName}>
					{ dayName },
				</div>
				<div className={styles.dateMonthName}>
					{ dateMonthNameText }
				</div>
			</div>
			<div className={styles.calendarBottomData}>
				<div className={ styles.calendarNavDataContainer }>
					<Scrollbars autoHide style={{ height: 373 }}>
						<div className={ styles.calendarNavDataWrapper }>
							<CalendarNavNameDays date={ props.date }/>
							<CalendarNavHolidays events={ props.events }/>
							<CalendarNavEvents events={[]}/>
						</div>
					</Scrollbars>
				</div>
				<CalendarAddButton />
			</div>
	  </div>
	)
}
