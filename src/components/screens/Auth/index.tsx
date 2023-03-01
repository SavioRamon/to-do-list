import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../utils/CONSTANTS";
import { Container } from "./style";

export default function Auth() {

    const navigate = useNavigate();


    useEffect(() => {
        const { LOGIN, REGISTER } = ROUTES;
        const location = window.location;
        const path = location.pathname;

        if(!path.includes(LOGIN) && !path.includes(REGISTER)) {
            navigate(`${LOGIN}`);
        }
    }, []);

    return (
        <Container>
            <Outlet />
        </Container>
    );
}