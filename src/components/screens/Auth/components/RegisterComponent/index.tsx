
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../../utils/CONSTANTS";
import Button from "../Button";
import ButtonInline from "../ButtonInline";
import Form from "../Form";
import Input from "../Input";
import TopContent from "../TopContent";


export default function RegisterComponent() {
    const navigate = useNavigate();
    const { LOGIN, AUTH } = ROUTES;

    function redirectUser(route: string) {
        navigate(`/${AUTH}/${route}`);
    }
    return (
        <Fragment>
            <TopContent>
                SIGN UP
            </TopContent>

            <Form>
                <Fragment>
                    <Input type="email" placeholder="put your email..." title="Email" />

                    <Input type="password" placeholder="put your password..." title="Password" />

                    <Button>
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
