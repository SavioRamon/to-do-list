import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Auth from "../components/screens/Auth";
import LoginComponent from "../components/screens/Auth/components/LoginComponent";
import RegisterComponent from "../components/screens/Auth/components/RegisterComponent";
import Home from "../components/screens/Home";
import { ROUTES } from "../utils/CONSTANTS";


export default function RouterComponent() {
    const { HOME, AUTH, LOGIN, REGISTER } = ROUTES;
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <App /> }>
                    <Route index element={<Home />} />
                    <Route path={AUTH} element={<Auth />}>
                        <Route path={LOGIN} element={<LoginComponent />} />
                        <Route path={REGISTER} element={<RegisterComponent />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}