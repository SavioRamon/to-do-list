import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../../utils/CONSTANTS";
import { Button } from "./style";

export default function LoginButton() {

    const navigate = useNavigate();
    const { AUTH, LOGIN } = ROUTES;

    function navigateToLoginScreen() {
        navigate(`${AUTH}/${LOGIN}`);
    }

    return (
        <Button onClick={navigateToLoginScreen}>
            Login
        </Button>
    )
}