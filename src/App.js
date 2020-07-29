import React from "react";
import Routes from "./pages/routes";
import { BrowserRouter as Router } from "react-router-dom";
import {
	MuiThemeProvider,
	createMuiTheme,
	responsiveFontSizes,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const overwrittenTheme = responsiveFontSizes(
	createMuiTheme(), // TODO: Create custom theme object
);

function App() {
	return (
		<MuiThemeProvider theme={overwrittenTheme}>
			<CssBaseline />
			<Router>
				<Routes />
			</Router>
		</MuiThemeProvider>
	);
}

export default App;
