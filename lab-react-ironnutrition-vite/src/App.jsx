import "./App.css"
import jsonFood from "./foods.json"
import { useState } from "react"
import { Row, Divider } from "antd"
import FoodBox from "./components/FoodBox"
import AddFoodForm from "./components/AddFoodForm"
import Search from "./components/Search"

function App() {
	const [foods, setFoods] = useState(jsonFood)
	const [search, setSearch] = useState("")

	const handleDelete = (id) => {
		setFoods(foods.filter((food) => food.id !== id))
	}

	const handleAddFood = (food) => {
		setFoods([...foods, food])
	}

	// const handleSearchResult = (string) => {
	// 	const searchMatches = jsonFood.filter((food) => {
	// 		return food.name.toUpperCase().indexOf(string.toUpperCase()) > -1
	// 	})
	// 	setFoods(searchMatches)
	// }

	let foodsToDisplay
	if (search === "") {
		foodsToDisplay = foods
	} else {
		foodsToDisplay = foods.filter((food) =>
			food.name.toUpperCase().includes(search.toUpperCase())
		)
	}

	return (
		<div className="App">
			<h1>LAB | React IronNutrition</h1>

			<AddFoodForm handleAddFood={handleAddFood} />
			<Divider>Search</Divider>
			{/* <Search handleSearchResult={handleSearchResult} /> */}
			<Search search={search} setSearch={setSearch} />
			<Divider>Food List</Divider>

			<Row style={{ width: "100%", justifyContent: "center" }}>
				{foodsToDisplay.map((food) => (
					<FoodBox key={food.id} food={food} handleDelete={handleDelete} />
				))}
			</Row>
		</div>
	)
}

export default App
