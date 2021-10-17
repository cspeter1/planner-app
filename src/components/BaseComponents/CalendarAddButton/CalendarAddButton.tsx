import { Icon } from '@material-ui/core'
import React from 'react'

import styles from './CalendarAddButton.scss'

export default function CalendarAddButton(): JSX.Element {
	return (
		<div className={ styles.calendarAddButtonContainer }>
      Új esemény
			<Icon className="fas fa-plus" data-theme-color/>
		</div>
	)
}
