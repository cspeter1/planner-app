import React from 'react'
import { getDayName, isToday, isWeekend } from '../../datas/Days/Days'
import { getMonth, getMonthName } from '../../datas/Days/Months'
import { fixHolidays, getEaster, IHoliday } from '../../datas/Days/Holidays'
import { isLeapYear } from '../../datas/Days/Years'

import Day from './Day'
import Grid from '@material-ui/core/Grid'

import './Calendar.scss'

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
			res.push(<div className='day calendar-empty-day'>
				{previousMonth.days - dayCount + i + 1}
			</div>)
		}

		return res
	}

	function renderWeekdayNames (): JSX.Element[] {
		return ['H', 'K', 'Sze', 'Cs', 'P', 'Szo', 'V'].map((actualDayName) => {
			const classList = actualDayName === 'V' ? 'weekday-name sunday' : 'weekday-name'
			return <div className={ classList } key={ actualDayName }>{ actualDayName }</div>
		})
	}

	const calendarDays: JSX.Element[] = [...renderWeekdayNames(), ...fillEmptySpace(new Date(actualDate.getFullYear(), actualDate.getMonth(), 1))]
	const holidays: IHoliday[] = [...fixHolidays, ...getEaster(props.year)]

	for (let i = 0; i < actaulMonth.days; i++) {
		const actMonthDate = new Date(actualDate.getFullYear(), actualDate.getMonth(), i+1)

		const actMonthDateClassList = isWeekend(getDayName(actMonthDate)) ? 'day calendar-day weekend' : 'day calendar-day'

		const event = holidays.filter((elem) => (elem.date.month === getMonthName(actMonthDate) && elem.date.days === i+1 ))

		const isWorkBreak = (event && event.some((actEvent) => actEvent.isWordBreak))

		const today = isToday(actMonthDate)
		calendarDays.push(
			<Day
				class={actMonthDateClassList}
				dayName={getDayName(actMonthDate)}
				index={i+1}
				event={ event.length > 0 ? event : undefined }
				today={today ? today : undefined}
				workBeakEvent={isWorkBreak}
				key={i+1}
			/>
		)
	}

	return(
		<div className='calendar-container'>
			<Grid container>
				<Grid item md={ 4 }>
					<div className='calendar-nav'></div>
				</Grid>
				<Grid item md={ 8 }>
					<div className='calendar-header'>
						<span className='month'>{getMonthName(actualDate)}</span>
						<span className='year'>{ props.year }</span>
					</div>
					<div className='calendar-days-container' data-monthname={getMonthName(actualDate)} data-year={actualDate.getFullYear()}>
						{ calendarDays }
					</div>
				</Grid>
			</Grid>
		</div>
	)
}

