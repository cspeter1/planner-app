import React from 'react'
import Grid from '@material-ui/core/Grid'
import Container from "@material-ui/core/Container"

import { getDayName, isToday, isWeekend, TDay } from '../../datas/Days/Days'
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

/**
 * Megfelelő nappal feltöli az első sort.
 * @param {TDay} dayName Az adott hónap első napja.
 * @returns {number} Mennyi nappal kell feltölteni az első sort.
 */
function preFillCalendar (dayName: TDay): number {
	switch (dayName) {
	case "Hétfő": 		return 0
	case "Kedd": 			return 1
	case "Szerda": 		return 2
	case "Csütörtök": return 3
	case "Péntek": 		return 4
	case "Szombat": 	return 5
	default: 					return 6
	}
}

/**
 * Az utolsó sort megfelelő nappal tölti fel
 * @param {TDay} dayName
 * @returns {number}
 */
function afterFillCalendar (dayName: TDay): number {
	switch (dayName) {
	case "Hétfő": 		return 6
	case "Kedd": 			return 5
	case "Szerda": 		return 4
	case "Csütörtök": return 3
	case "Péntek": 		return 2
	case "Szombat": 	return 1
	default: 					return 0
	}
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
	function fillEmptySpace(date: Date): Array<JSX.Element> {
		const res: Array<JSX.Element> = []

		// A hónap első napja
		const dayName = getDayName(date)

		// Előző hónap
		const previousMonth = getMonth(getMonthName(new Date(date.getFullYear(), date.getMonth() - 1)))

		// Mennyi napot kell az aktuális hónap elé beszúrni?
		const dayCount = preFillCalendar(dayName)

		for (let i = 0; i < dayCount; i++) {
			res.push(<div className={`${dayStyles.day} ${dayStyles.calendarEmptyDay}`} key={`day-empty-${previousMonth.days - i}`}>
				{previousMonth.days - dayCount + i + 1}
			</div>)
		}

		return res
	}

	function renderWeekdayNames (): Array<JSX.Element> {
		return ['H', 'K', 'Sze', 'Cs', 'P', 'Szo', 'V'].map((actualDayName) => {
			const classList = actualDayName === 'V' ? `${styles.weekdayName} ${styles.sunday}` : styles.weekdayName
			return <div className={ classList } key={ actualDayName }>{ actualDayName }</div>
		})
	}

	const calendarDays: Array<JSX.Element> = [...renderWeekdayNames(), ...fillEmptySpace(new Date(props.year, props.month, 1))]
	const holidays: Array<IHoliday> = [...fixHolidays, ...getEaster(props.year)]

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
	const lastDayName = getDayName(new Date(props.year, props.month, actaulMonth.days))

	const fillLastDaysCount = afterFillCalendar(lastDayName)

	utils.array.times(fillLastDaysCount, (i: number) => {
		calendarDays.push(<div className={ `${ dayStyles.day }, ${ dayStyles.calendarEmptyDay }` } key={ `after-fill-calendar-${ i }` } >{ `${i + 1}` }</div>)
	})

	const actualDateEvents = getHoliday(new Date())

	return(
		<div className={styles.calendarContentContainer} data-theme-color data-theme-bg>
			<Container>
 				<div className={ styles.calendarContainer }>
					<Grid container>
						<Grid item md={ 4 } xs={ 12 }>
							<CalendarNav date={ new Date() } events={ actualDateEvents }/>
						</Grid>
						<Grid item md={ 8 } xs={ 12 }>
							<div className={styles.calendarHeader}>
								<span className={styles.month}>{getMonthName(actualDate)}</span>
								<span className={styles.year} data-theme-color>{ props.year }</span>
							</div>
							<div className={styles.calendarDaysContainer} data-monthname={getMonthName(actualDate)} data-year={props.year}>
								{ calendarDays }
							</div>
						</Grid>
					</Grid>
				</div>
			</Container>
		</div>
	)
}

