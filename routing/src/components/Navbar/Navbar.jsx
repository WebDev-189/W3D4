import React from "react"
import "./Navbar.css"
import { NavLink } from "react-router-dom"
export default function Navbar() {
	return (
		<div className="Navbar">
			<h1>All around the route.</h1>

			<nav>
				<ul>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/about">About</NavLink>
					</li>
					<li>
						<NavLink to="/movies">Movies</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	)
}
