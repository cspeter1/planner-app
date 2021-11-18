import React from 'react'

import styles from './CalendarNavContainer.scss'

interface ICalendarNavContainerProps {
  header: string | PlannerElement,
  isEmptyHeader: boolean,
  hr: boolean,
  content: PlannerElement | Array<PlannerElement>
}


export default function CalendarNavContainer(props: ICalendarNavContainerProps): PlannerElement {
	const { header, isEmptyHeader, hr, content } = props

	const headerTextClassList = isEmptyHeader ? [ styles.calendarNavHeader, styles.calendarNavHeaderEmpty ].join(' ') : styles.calendarNavHeader

	return (
		<div className={ styles.calendarNavContainer }>
			<div className={ headerTextClassList }>
				{ header }
			</div>
			{ hr ? <hr/ > : '' }
			<div className={ styles.calendarNavContent }>
				{ content }
			</div>
		</div>
	)
}
