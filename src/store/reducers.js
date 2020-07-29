import { combineReducers } from "redux"

import { UPDATE_USER } from "./actions"

// Reducer for all user data
const userReducer = (state = { userID: 1 }, action) => {
	switch (action.type) {
		case UPDATE_USER:
			return action.payload
		default:
			return state
	}
}

// Combine all app reducers; if any reducers exist nested in project directory (via ducks), import them here
const rootReducer = combineReducers({
	user: userReducer,
})

export default rootReducer
