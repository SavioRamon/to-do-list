
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../../context/AuthContext";
import { ROUTES } from "../../../../../utils/CONSTANTS";
import Button from "../Button";
import ButtonInline from "../ButtonInline";
import Form from "../Form";
import Input from "../Input";
import TopContent from "../TopContent";


export default function LoginComponent() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signInReq } = useAuth();
    const navigate = useNavigate();
    const { REGISTER, AUTH } = ROUTES;


    function redirectUser(route: string) {
        navigate(`/${AUTH}/${route}`);
    }

    
    function signIn() {
        signInReq({ email, password });
    }


    return (
        <Fragment>
            <TopContent>
                LOGIN
            </TopContent>
            <Form>
                <Fragment>
                    <Input
                        type="email"
                        placeholder="put your email..."
                        title="Email"
                        change={setEmail}
                    />

                    <Input
                        type="password"
                        placeholder="put your password..."
                        title="Password"
                        change={setPassword}
                    />

                    <ButtonInline text="" action={() => {console.log("test")}}>
                        Forgot your password?
                    </ButtonInline>

                    <Button action={signIn}>
                        LOGIN
                    </Button>

                    <ButtonInline
                        text="Need an account?"
                        center={true}
                        action={() => redirectUser(REGISTER)}
                    >
                        SIGN UP
                    </ButtonInline>
                </Fragment>
            </Form>
        </Fragment> 
    );
}
