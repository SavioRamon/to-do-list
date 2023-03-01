import { Outlet } from "react-router-dom";
import { Container } from "./style";

export default function Auth() {
    return (
        <Container>
            <Outlet />
        </Container>
    );
}