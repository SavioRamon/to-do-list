import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Container, Wrapper } from "./app.style";
import Header from "./components/common/Header";
import { useAuth } from "./context/AuthContext";
import { GlobalStyle } from "./globalStyle";
import { ROUTES } from "./utils/CONSTANTS";


export default function App() {

	const { autoSignInReq } = useAuth();

	const { AUTH } = ROUTES;
	const isAuthRoute = useLocation().pathname.includes(AUTH);

	useEffect(() => {
		autoSignInReq();
	}, []);

	return (
		<Container>
			<GlobalStyle />

			{(isAuthRoute === false) &&
				<Header />
			}

			<Wrapper>
				<Outlet />
			</Wrapper>
		</Container>
	)
}
