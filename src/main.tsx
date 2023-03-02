import React from "react";
import ReactDOM from "react-dom/client";
import ThemeContextProvider from "./context/ThemeContext";
import RouterComponent from "./Routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ThemeContextProvider>
			<RouterComponent />
		</ThemeContextProvider>
	</React.StrictMode>,
)
