import { Divider, Input, Button } from "antd"
import { useState } from "react"

function AddFoodForm({ handleAddFood }) {
	const [formData, setFormData] = useState({
		name: "",
		image: "",
		calories: 0,
		servings: 0,
	})

	const handleChange = (event) => {
		const key = event.target.name
		let value

		if (event.target.type === "number") {
			value = event.target.valueAsNumber
		} else {
			value = event.target.value
		}

		setFormData({ ...formData, [key]: value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		// console.log(e.defaultPrevented)
		handleAddFood({ ...formData, id: crypto.randomUUID() })
	}

	return (
		<form onSubmit={handleSubmit}>
			<Divider>Add Food Entry</Divider>

			<label>Name</label>
			<Input
				name="name"
				value={formData.name}
				type="text"
				onChange={handleChange}
			/>

			<label>Image</label>
			<Input
				name="image"
				value={formData.image}
				type="url"
				onChange={handleChange}
			/>

			<label>Calories</label>
			<Input
				name="calories"
				value={formData.calories}
				type="number"
				onChange={handleChange}
			/>
			{/* render antd <Input /> type="number" here */}

			<label>Servings</label>
			<Input
				name="servings"
				value={formData.servings}
				type="number"
				onChange={handleChange}
			/>
			{/* render antd <Input /> type="number" here */}

			<button>Create</button>
		</form>
	)
}

export default AddFoodForm
