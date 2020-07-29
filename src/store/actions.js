// ACTION TYPES
export const UPDATE_USER = "UPDATE_USER"

// ACTION CREATORS
// All regular action creators should return an object of the form { type, payload } where payload contains the relevant information for the correspoding action

// updateUser action: used to update the current user information
export const updateUser = (user) => {
	return {
		type: UPDATE_USER,
		payload: user,
	}
}
