import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Auth from "../components/screens/Auth";
import LoginComponent from "../components/screens/Auth/components/LoginComponent";
import RegisterComponent from "../components/screens/Auth/components/RegisterComponent";
import Home from "../components/screens/Home";


export default function RouterComponent() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <App /> }>
                    <Route index element={<Home />} />
                    <Route path="auth" element={<Auth />}>
                        <Route path="login" element={<LoginComponent />} />
                        <Route path="register" element={<RegisterComponent />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}