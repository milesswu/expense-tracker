import { connect } from "react-redux"
import LoginComponent from "./LoginComponent"

// import actions used in the component
import { updateUser } from "../duck/actions"

// Map data in the store to component props
const mapStateToProps = (state) => ({
	user: state.user,
})

// Map actions from the store to component props
const mapDispatchToProps = (dispatch) => ({
	updateUser: (user) => {
		// dispatches the action
		dispatch(updateUser(user))
	},
})

// connect state and dispatch to redux stroe
export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)
