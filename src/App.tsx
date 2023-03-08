import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "./app.style";
import { useAuth } from "./context/AuthContext";
import { GlobalStyle } from "./globalStyle";


export default function App() {

	const { autoSignInReq } = useAuth();

	useEffect(() => {
		autoSignInReq();
	}, []);

	return (
		<Container>
			<GlobalStyle />
			
			<Outlet />
		</Container>
	)
}
