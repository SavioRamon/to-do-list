import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Container, Wrapper } from "./app.style";
import Header from "./components/common/Header";
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

			<Header />

			<Wrapper>
				<Outlet />
			</Wrapper>
		</Container>
	)
}
