import React from 'react'
import { IHoliday } from '../../datas/Days/Holidays'

import { renderStyledBadge, TBadgeIcon } from '../BaseComponents/CalendarStyledBudge/CalendarStyledBudge'

import styles from './Day.scss'

interface IDayProps {
  dayName: string
  index: number
	weekend: boolean
  event?: Array<IHoliday>
  workBeakEvent?: boolean
  today?: boolean
}

function renderBadges(holidays: Array<IHoliday>): Array<PlannerElement> {
	// Van-e ikon az ünnepek között?
	const hasIcons = holidays.filter((holiday) => holiday.event.icon !== undefined)
	const restHolidays = holidays.filter((holiday) => !hasIcons.includes(holiday))


	if (hasIcons.length > 0) {
		if (hasIcons.length <= 2) {
			return [
				...hasIcons.map((holidayIcon, i) => renderStyledBadge({
					content: holidayIcon.event.icon as (number | TBadgeIcon), index: i
				})), renderStyledBadge({
					content: restHolidays.length, index: 0
				}) ]
		}

		const slicedHasIcons = hasIcons.slice(0, 2)
		const slicedRestHolidays = holidays.filter((holiday) => !slicedHasIcons.includes(holiday))

		return [
			...slicedHasIcons.map((holidayIcon, i) => renderStyledBadge({
				content: holidayIcon.event.icon as (number | TBadgeIcon), index: i + 1
			})), renderStyledBadge({
				content: slicedRestHolidays.length, index: 0
			}) ]
	}

	return [ renderStyledBadge({
		content: holidays.length, index: 0
	}) ]
}

export default function Day(props: IDayProps): PlannerElement {
	const { weekend, dayName, today, workBeakEvent, index, event } = props

	const classList = weekend ? `${styles.day} ${styles.calendarDay} ${styles.weekend}` : `${styles.day} ${styles.calendarDay}`

	return (
		<div
			className={ classList }
			data-dayname={ dayName }
			data-theme-color={ today }
			data-work-break={ workBeakEvent ? workBeakEvent : undefined }
			key={`day-${ index }`}
		>
			{ index}
			{ event !== undefined ? (renderBadges(event)) : '' }
		</div>
	)
}
