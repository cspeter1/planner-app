import React from 'react'
import AppIcon from './components/AppIcon/AppIcon'
import BaseIcon from './components/NavIcon/NavIcon'
import Section from './components/Section/Section'

import styles from './Navbar.scss'

export default function Navbar (): PlannerElement {
  return (
    <div className={ styles.navbar }>
      <Section percentage={ 15 } >
        <AppIcon />
      </Section>
      <Section percentage={ 60 } >
        <BaseIcon type="calendar" />
        <BaseIcon type="chat" />
        <BaseIcon type="list" />
        <BaseIcon type="money" />
      </Section>
      <Section percentage={ 25 } >
        <BaseIcon type="settings" />
        <BaseIcon type="logout" />
      </Section>
    </div>
  )
}
