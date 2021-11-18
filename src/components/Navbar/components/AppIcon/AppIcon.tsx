import Icon from '@material-ui/core/Icon/Icon'
import React from 'react'
import styles from './AppIcon.scss'

export default function AppIcon(): PlannerElement {
  return (
    <div className={ styles.appIcon }>
      <Icon className='far fa-calendar-alt' />
    </div>
  )
}
