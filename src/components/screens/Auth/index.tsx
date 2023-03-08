import { useEffect, useLayoutEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { ROUTES } from "../../../utils/CONSTANTS";
import { Container, Wrapper } from "./style";

export default function Auth() {

    const { user } = useAuth();
    const navigate = useNavigate();


    useEffect(() => {
        const { LOGIN, REGISTER } = ROUTES;
        const location = window.location;
        const path = location.pathname;

        if(!path.includes(LOGIN) && !path.includes(REGISTER)) {
            navigate(`${LOGIN}`);
        }
    }, []);

    useLayoutEffect(() => {
        if(user) {
            navigate("/");
        }
    }, [user]);

    return (
        <Container>
            <Wrapper>
                <Outlet />
            </Wrapper>
        </Container>
    );
}