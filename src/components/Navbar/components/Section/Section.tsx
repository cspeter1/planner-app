import React from "react"
import { Collection } from "../../../../../types/types"

import styles from './Section.scss'

interface ISectionProps {
  percentage: number
  children?: Collection<PlannerElement>
}

export default function Section (props: ISectionProps): PlannerElement {
  const { percentage, children = undefined } = props

  const section: PlannerElement = (
    <div className={ styles.section } style={{ height: `${ percentage }%` }} >{ children }</div>
  )

  return section
}
