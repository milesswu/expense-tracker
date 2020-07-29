import { connect } from "react-redux"
import LoginComponent from "./LoginComponent"

import { updateUser } from "../duck/actions"

const mapStateToProps = (state) => ({
	user: state.user,
})

const mapDispatchToProps = (dispatch) => ({
	updateUser: (user) => {
		dispatch(updateUser(user))
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)
