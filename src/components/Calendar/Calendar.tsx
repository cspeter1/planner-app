import React from 'react'
import Grid from '@material-ui/core/Grid'

import { getDayName, isToday, isWeekend } from '../../datas/Days/Days'
import { getMonth, getMonthName } from '../../datas/Days/Months'
import { fixHolidays, getEaster, getHoliday, IHoliday } from '../../datas/Days/Holidays'
import { isLeapYear } from '../../datas/Days/Years'
import CalendarNav from '../BaseComponents/CalendarNav/CalendarNav'

import Day from './Day'

import styles from './Calendar.scss'
import dayStyles from './Day.scss'

interface ICalendarProp {
  year: number
  month: number
}

export default function Calendar(props: ICalendarProp): JSX.Element {
	// A paraméterek szerinti hónap
	const actualDate = new Date(props.year, props.month)

	// Aktuális hónap
	const actaulMonth = getMonth(getMonthName(actualDate))

	// Szőkőév (Február + 1)
	if (actaulMonth.month === 'Február' && isLeapYear(props.year)) {
		actaulMonth.days++
	}

	/**
   * A napok elejét feltölti üres napokkal
   * @param date A megadott dátum
   */
	function fillEmptySpace(date: Date): JSX.Element[] {
		const res: JSX.Element[] = []

		// A hónap első napja
		const dayName = getDayName(date)

		// Előző hónap
		const previousMonth = getMonth(getMonthName(new Date(date.getFullYear(), date.getMonth() - 1)))

		// Mennyi napot kell az aktuális hónap elé beszúrni?
		const dayCount = dayName === 'Hétfő' ? 0
			: (dayName === 'Kedd' ? 1
				: (dayName === 'Szerda' ? 2
					: (dayName === 'Csütörtök' ? 3
						: (dayName === 'Péntek' ? 4
							: (dayName === 'Szombat' ? 5
								: 6 )))))

		for (let i = 0; i < dayCount; i++) {
			res.push(<div className={`${dayStyles.day} ${dayStyles.calendarEmptyDay}`} key={`day-empty-${previousMonth.days - i}`}>
				{previousMonth.days - dayCount + i + 1}
			</div>)
		}

		return res
	}

	function renderWeekdayNames (): JSX.Element[] {
		return ['H', 'K', 'Sze', 'Cs', 'P', 'Szo', 'V'].map((actualDayName) => {
			const classList = actualDayName === 'V' ? `${styles.weekdayName} ${styles.sunday}` : styles.weekdayName
			return <div className={ classList } key={ actualDayName }>{ actualDayName }</div>
		})
	}

	const calendarDays: JSX.Element[] = [...renderWeekdayNames(), ...fillEmptySpace(new Date(props.year, props.month, 1))]
	const holidays: IHoliday[] = [...fixHolidays, ...getEaster(props.year)]

	for (let i = 0; i < actaulMonth.days; i++) {
		const actMonthDate = new Date(props.year, props.month, i+1)

		const event = holidays.filter((elem) => (elem.date.month === getMonthName(actMonthDate) && elem.date.days === i+1 ))

		const isWorkBreak = (event && event.some((actEvent) => actEvent.isWordBreak))

		const today = isToday(actMonthDate)
		calendarDays.push(
			<Day
				dayName={getDayName(actMonthDate)}
				index={i+1}
				event={ event.length > 0 ? event : undefined }
				today={today ? today : undefined}
				workBeakEvent={isWorkBreak}
				weekend={isWeekend(getDayName(actMonthDate))}
			/>
		)
	}

	// Utolsó nap megvizsgálása, hogy mennyi nappal kell feltölteni
	const lastMonthDayName = getDayName(new Date(props.year, props.month, actaulMonth.days))

	const fillLastDaysCount = lastMonthDayName === 'Hétfő' ? 6 :
		(lastMonthDayName === 'Kedd' ? 5 :
			(lastMonthDayName === 'Szerda' ? 4 :
				(lastMonthDayName === 'Csütörtök' ? 3 :
					(lastMonthDayName === 'Péntek' ? 2 :
						(lastMonthDayName === 'Szombat' ? 1 : 0)))))

	for (let i = 0; i < fillLastDaysCount; i++) {
		calendarDays.push(<div className={`${dayStyles.day} ${dayStyles.calendarEmptyDay}`} key={`day-empty-${i}`}>
			{i + 1}
		</div>)
	}


	const actualDateEvents = getHoliday(new Date())

	return(
		<div className={ styles.calendarContainer }>
			<Grid container>
				<Grid item md={ 4 } xs={ 12 }>
					<CalendarNav date={ new Date() } events={ actualDateEvents }/>
				</Grid>
				<Grid item md={ 8 } xs={ 12 }>
					<div className={styles.calendarHeader}>
						<span className={styles.month}>{getMonthName(actualDate)}</span>
						<span className={styles.year}>{ props.year }</span>
					</div>
					<div className={styles.calendarDaysContainer} data-monthname={getMonthName(actualDate)} data-year={props.year}>
						{ calendarDays }
					</div>
				</Grid>
			</Grid>
		</div>
	)
}

