import React from "react"
import Section from "../Navbar/components/Section/Section"
import ScrollSection from "./components/ScrollSection/ScrollSection"
import SidebarFriend from "./components/SidebarFriend/SidebarFriend"
import SidebarHeader from "./components/SidebarHeader/SidebarHeader"

import styles from './Sidebar.scss'

export default function Sidebar (): PlannerElement {
  const sidebar = (
    <div className={ styles.sidebar }>
      <Section percentage={ 10 }>
        <SidebarHeader />
      </Section>
      <Section percentage={ 90 }>
        <ScrollSection>
          { utils.array.times(utils.number.random(10, 15), () => (<SidebarFriend name={""} status={"online"} />)) }
        </ScrollSection>
      </Section>
    </div>
  )

  return sidebar
}
