import React from "react"
import { Link, Outlet } from "react-router-dom"
function MovieLayout({ movies }) {
	return (
		<>
			<div
				style={{
					width: "10rem",
					height: "calc(100vh - 5rem)",
					position: "fixed",
					left: 0,
					top: "5rem",
					backgroundColor: "black",
					overflowY: "scroll",
					color: "white",
				}}>
				{movies.map((movie) => (
					<Link to={`/movies/${movie.id}`}>
						<p key={movie.id}>{movie.title}</p>
					</Link>
				))}
			</div>
			<section
				style={{
					marginLeft: "12rem",
				}}>
				<Outlet />
			</section>
		</>
	)
}

export default MovieLayout
