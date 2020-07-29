import React, { useState } from "react"
import PropTypes from "prop-types"

import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

function LoginComponent(props) {
	const { user, updateUser } = props
	const [currentUser, setCurrentUser] = useState(user)

	const handleChange = (event) => {
		const { target } = event

		setCurrentUser((prev) => {
			return {
				...prev,
				[target.name]: target.value,
			}
		})
	}

	const handleSubmit = () => {
		updateUser(currentUser)
	}

	return (
		<>
			<Typography variant="h1">Hello, {user.name || "World"}!</Typography>
			<TextField
				required
				id="name"
				name="name"
				label="Name"
				placeholder="Enter your name"
				value={currentUser.name || null}
				onChange={handleChange}
			/>
			<br />
			<Button variant="outlined" onClick={handleSubmit}>
				Login
			</Button>
		</>
	)
}

LoginComponent.propTypes = {
	user: PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string,
	}).isRequired,
	updateUser: PropTypes.func.isRequired,
}

export default LoginComponent
