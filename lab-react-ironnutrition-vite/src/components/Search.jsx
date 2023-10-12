import { Divider, Input } from "antd"
// import { useState } from "react"
function Search({ search, setSearch }) {
	// const handleSearch = (e) => {
	// 	setSearch(e.target.value)
	// 	handleSearchResult(search)
	// }

	return (
		<>
			<Divider>Search</Divider>

			<label>Search</label>
			<Input
				name="search"
				value={search}
				type="text"
				onChange={(e) => setSearch(e.target.value)}
			/>
		</>
	)
}

export default Search
