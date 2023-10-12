import React from "react"
import { useParams, useNavigate } from "react-router-dom"

function OneMoviePage({ movies }) {
	// const params = useParams()
	const { movieId } = useParams()
	const navigate = useNavigate()

	const movieToDisplay = movies.find((movie) => movie.id === Number(movieId))
	if (!movieToDisplay) {
		return <p>No content found.</p>
	}
	document.title = `My Movie DB!  ${movieToDisplay.title}`

	const movieDate = new Date(movieToDisplay.release_date)
	const displayedDate = movieDate.toLocaleDateString(undefined, {
		weekday: "short",
		month: "short",
		day: "numeric",
	})

	return (
		<article>
			<h3>{movieToDisplay.title}</h3>
			<p>{movieToDisplay.overview}</p>
			<p>Release: {displayedDate}</p>
			<p>Average Rating: {movieToDisplay.vote_average}</p>

			<button onClick={() => navigate(-1)}>Go back</button>
		</article>
	)
}

export default OneMoviePage
