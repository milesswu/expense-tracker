import { combineReducers } from "redux"
import userReducer from "../components/HomePage/duck/reducers"

// Combine all app reducers; if any reducers exist nested in project directory (via ducks), import them here
const rootReducer = combineReducers({
	user: userReducer,
})

export default rootReducer
