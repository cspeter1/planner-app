import React from 'react'
import { IHoliday } from '../../datas/Days/Holidays'

import { renderStyledBadge, TBadgeIcon } from '../BaseComponents/CalendarStyledBudge/CalendarStyledBudge'

import styles from './Day.scss'

interface IDayProps {
  dayName: string
  index: number
	weekend: boolean
  event?: IHoliday[]
  workBeakEvent?: boolean
  today?: boolean
}

function renderBadges(holidays: IHoliday[]): JSX.Element[] {
	// Van-e ikon az ünnepek között?
	const hasIcons = holidays.filter((holiday) => holiday.event.icon !== undefined)
	const restHolidays = holidays.filter((holiday) => !hasIcons.includes(holiday))

	let count = holidays.length

	if (hasIcons.length > 0) {
		if (hasIcons.length <= 2) {
			return [
				...hasIcons.map((holidayIcon) => {
					count--
					return renderStyledBadge({
						content: holidayIcon.event.icon as (number | TBadgeIcon), index: count
					})
				}), renderStyledBadge({
					content: restHolidays.length, index: 0
				}) ]
		}

		const slicedHasIcons = hasIcons.slice(0, 2)
		const slicedRestHolidays = holidays.filter((holiday) => !slicedHasIcons.includes(holiday))

		return [
			...slicedHasIcons.map((holidayIcon) => {
				count--
				return renderStyledBadge({
					content: holidayIcon.event.icon as (number | TBadgeIcon), index: count
				})
			}), renderStyledBadge({
				content: slicedRestHolidays.length, index: 0
			}) ]
	}

	return [ renderStyledBadge({
		content: holidays.length, index: 0
	}) ]
}

export default function Day(props: IDayProps): JSX.Element {
	const classList = props.weekend ? `${styles.day} ${styles.calendarDay} ${styles.weekend}` : `${styles.day} ${styles.calendarDay}`

	return(
		<div
			className={classList}
			data-dayname={props.dayName}
			data-today={props.today}
			data-work-break={props.workBeakEvent ? props.workBeakEvent : undefined}
			key={`day-${ props.index }`}
		>
			{props.index}
			{props.event !== undefined ? (renderBadges(props.event)) : ''}
		</div>
	)
}
