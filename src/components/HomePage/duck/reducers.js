import { UPDATE_USER } from "./actions"

// Reducer for all user data
const userReducer = (state = { id: 1 }, action) => {
	switch (action.type) {
		case UPDATE_USER:
			return action.payload
		default:
			return state
	}
}

export default userReducer
