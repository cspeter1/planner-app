import React from 'react'
import { IHoliday } from '../../datas/Days/Holidays'

import { renderStyledBadge, TBadgeIcon } from '../BaseComponents/CalendarStyledBudge/CalendarStyledBudge'

import './Day.scss'

interface IDayProps {
  class: string
  dayName: string
  index: number
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
	return(
		<div
			className={props.class}
			data-dayname={props.dayName}
			data-today={props.today}
			data-work-break={props.workBeakEvent ? props.workBeakEvent : undefined}
		>
			{props.index}
			{props.event !== undefined ? (renderBadges(props.event)) : ''}
		</div>
	)
}
