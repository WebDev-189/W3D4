import React from "react"
import "./AllMovies.css"
import { Link } from "react-router-dom"
function AllMovies({ movies }) {
	return (
		<div>
			<h2>All the movies!</h2>
			<hr />
			<section
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "2rem",
				}}>
				{movies.map((movie) => {
					return (
						<article
							style={{
								backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
							}}
							className="OneMovie"
							key={movie.id}>
							<Link to={`/movies/${movie.id}`}>
								<h3>{movie.title}</h3>
							</Link>
						</article>
					)
				})}
			</section>
		</div>
	)
}

export default AllMovies
