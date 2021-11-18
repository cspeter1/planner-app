import Icon from "@material-ui/core/Icon/Icon"
import React from "react"

import styles from './NavIcon.scss'

type TIcon = 'settings' | 'logout' | 'calendar' | 'chat' | 'list' | 'money'

type TIconClass = Record<TIcon, string>

const ICON_CLASSES: TIconClass = {
  'settings': 'fas fa-cog',
  'logout': 'fas fa-sign-out-alt',
  'calendar': 'fas fa-calendar',
  'chat': 'far fa-comment-alt',
  'list': 'fas fa-clipboard-list',
  'money': 'fas fa-wallet'
}

interface IBaseIconProps {
  type: TIcon
}

export default function BaseIcon(props: IBaseIconProps): PlannerElement {
  const { type } = props

  return (
    <div className={ styles.baseIcon } >
      <Icon className={ ICON_CLASSES[type] } />
    </div>
  )
}
