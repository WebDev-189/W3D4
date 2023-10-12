import React from "react"
import Navbar from "./Navbar/Navbar"
import { Outlet } from "react-router-dom"
function Layout() {
	return (
		<>
			<Navbar />
			<main>
				<Outlet />
			</main>

			<footer>This is a footer</footer>
		</>
	)
}

export default Layout
