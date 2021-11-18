import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'

export default function Home(): PlannerElement {
	return(
		<>
			<Navbar />
			<Sidebar />
		</>
	)
}
