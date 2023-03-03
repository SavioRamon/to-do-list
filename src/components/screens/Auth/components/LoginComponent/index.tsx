
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../../utils/CONSTANTS";
import Button from "../Button";
import ButtonInline from "../ButtonInline";
import Form from "../Form";
import Input from "../Input";
import TopContent from "../TopContent";


export default function LoginComponent() {
    const navigate = useNavigate();
    const { REGISTER, AUTH } = ROUTES;

    function redirectUser(route: string) {
        navigate(`/${AUTH}/${route}`);
    }

    return (
        <Fragment>
            <TopContent>
                LOGIN
            </TopContent>
            <Form>
                <Fragment>
                    <Input type="email" placeholder="put your email..." title="Email" />

                    <Input type="password" placeholder="put your password..." title="Password" />

                    <ButtonInline text="" action={() => {console.log("test")}}>
                        Forgot your password?
                    </ButtonInline>

                    <Button>
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
