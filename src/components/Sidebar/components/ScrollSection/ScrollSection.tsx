import React from 'react'
import { Collection } from '../../../../../types/types';

import styles from './ScrollSection.scss'

interface IScrollSectionProps {
  children?: Collection<PlannerElement>
}

export default function ScrollSection (props: IScrollSectionProps): PlannerElement {
  const { children = '' } = props

  return (
    <div className={ styles.scrollSection }>
      { children }
    </div>
  )
}
