import "./App.css"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import ErrorPage from "./pages/ErrorPage/ErrorPage"
import HomePage from "./pages/HomePage/HomePage"
import AboutPage from "./pages/AboutPage/AboutPage"
import AllMoviesPage from "./pages/AllMovies/AllMovies"
import OneMoviePage from "./pages/OneMoviePage/OneMoviePage"
import { useState } from "react"
import movieData from "./movies.json"

import Layout from "./components/Layout"
import MovieLayout from "./components/MovieLayout"

/**
 * - npm i react-router-dom
 * - Configuring the BrowserRouter
 * - Defining Routes (And Route)
 * - Handling navigation with Link
 *
 * - Advanced Routes:
 *  - Dynamic Routing and params
 *  - Routing priority
 *  - Not Found Route
 *  - Nested Routes
 *  - Shared Layout(s) and Outlet
 *  - Link and NavLink
 */

function App() {
	const [movies, setMovies] = useState(movieData)

	return (
		<>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutPage />} />

					{/* <Route path="/movies" element={<AllMoviesPage movies={movies} />} />
					<Route
						path="/movies/:movieId"
						element={<OneMoviePage movies={movies} />}
					/>
					 */}

					<Route path="/movies" element={<MovieLayout movies={movies} />}>
						<Route path="" element={<AllMoviesPage movies={movies} />} />
						<Route path=":movieId" element={<OneMoviePage movies={movies} />} />
					</Route>
					<Route path="*" element={<ErrorPage />} />
				</Route>
			</Routes>

			{/* <Routes>
					<Route path="/about" element={<h1>What is happening???</h1>} />
				</Routes> */}
		</>
	)
}

export default App
