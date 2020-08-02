// ACTION TYPES
export const UPDATE_USER = "UPDATE_USER"

// ACTION CREATORS
/**
 * All regular action creators should return an object of the form { type, payload }
 * where payload contains the relevant information for the correspoding action
 * All asynchronous action creators should return a function of the form function (dispatch) => {}
 * where the dispatch function is used to dispatch an action object { type, payload }
 */

// updateUser action: used to update the current user information
export const updateUser = (user) => {
	return {
		type: UPDATE_USER,
		payload: user,
	}
}

// example async action creator
// export const sendRequest = (uid) => async (dispatch) => {
// 	dispatch({ type: "REQUEST_SENT" })
// 	try {
// 		const info = await fetch(`/route/${uid}`)
//    // notice we dispatch the action after we get a response from the async call
// 		dispatch({ type: "REQUEST_FULFILLED", payload: info })
// 	} catch (err) {
// 		dispatch({ type: "REQUEST_DENIED", payload: err.message })
// 	}
// }
