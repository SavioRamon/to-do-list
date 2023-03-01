import { Outlet } from "react-router-dom";
import { Container } from "./app.style";
import { GlobalStyle } from "./globalStyle";


export default function App() {
	return (
		<Container>
			<GlobalStyle />
			
			<Outlet />
		</Container>
	)
}
