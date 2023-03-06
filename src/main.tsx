import React from "react";
import ReactDOM from "react-dom/client";
import AuthProvider from "./context/AuthContext";
import ThemeContextProvider from "./context/ThemeContext";
import RouterComponent from "./Routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ThemeContextProvider>
			<AuthProvider>
				
				<RouterComponent />
				
			</AuthProvider>
		</ThemeContextProvider>
	</React.StrictMode>,
)
