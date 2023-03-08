
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../../context/AuthContext";
import { ROUTES } from "../../../../../utils/CONSTANTS";
import Button from "../Button";
import ButtonInline from "../ButtonInline";
import Form from "../Form";
import Input from "../Input";
import TopContent from "../TopContent";


export default function RegisterComponent() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signUpReq } = useAuth();
    const navigate = useNavigate();
    const { LOGIN, AUTH } = ROUTES;


    function redirectUser(route: string) {
        navigate(`/${AUTH}/${route}`);
    }


    function SignUp() {
        signUpReq({ email, password });
    }


    return (
        <Fragment>
            <TopContent>
                SIGN UP
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

                    <Button action={SignUp}>
                        SIGN UP
                    </Button>

                    <ButtonInline
                        text="Already a user?"
                        center={true}
                        action={() => redirectUser(LOGIN)}
                    >
                        LOGIN
                    </ButtonInline>
                </Fragment>
            </Form>
        </Fragment> 
    );
}
