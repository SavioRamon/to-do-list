import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import RouterComponent from "./Routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterComponent />
	</React.StrictMode>,
)
