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

const SCROLLBAR_HEIGHT = 373

interface ICalendarNavProps {
  date: Date
	events: ReadonlyArray<IHoliday>
}

export default function CalendarNav(props: ICalendarNavProps): PlannerElement {
	const { date, events } = props


	const actualDayName = getActualDay(date)

	const dayName = getDayName(date)
	const monthName = getMonthName(date)

	const dateMonthNameText = `${ monthName } ${ date.getDate() }`

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
					<Scrollbars autoHide style={{ height: SCROLLBAR_HEIGHT }}>
						<div className={ styles.calendarNavDataWrapper }>
							<CalendarNavNameDays date={ date }/>
							<CalendarNavHolidays events={ events }/>
							<CalendarNavEvents events={[]}/>
						</div>
					</Scrollbars>
				</div>
				<CalendarAddButton />
			</div>
	  </div>
	)
}
