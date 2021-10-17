import React from 'react'

import styles from './CalendarNavContainer.scss'

interface ICalendarNavContainerProps {
  header: string | JSX.Element,
  isEmptyHeader: boolean,
  hr: boolean,
  content: JSX.Element | Array<JSX.Element>
}


export default function CalendarNavContainer(props: ICalendarNavContainerProps): JSX.Element {
	const headerTextClassList = props.isEmptyHeader ? [ styles.calendarNavHeader, styles.calendarNavHeaderEmpty ].join(' ') : styles.calendarNavHeader

	return (
		<div className={styles.calendarNavContainer}>
			<div className={headerTextClassList}>
				{ props.header }
			</div>
			{props.hr ? <hr/ > : ''}
			<div className={styles.calendarNavContent}>
				{props.content}
			</div>
		</div>
	)
}
