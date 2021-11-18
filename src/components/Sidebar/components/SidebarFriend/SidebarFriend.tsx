import React from "react";

import styles from './SidebarFriend.scss'

interface ISidebarFriendProps {
  name: string
  status: 'online' | 'offline'
}

export default function SidebarFriend (props: ISidebarFriendProps): PlannerElement {
  return  (
    <div className={ styles.sidebarFriend }>
      <div className={ styles.sidebarFriendAvatar } />
    </div>
  )
}
