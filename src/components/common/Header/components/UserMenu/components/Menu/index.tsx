
import Button from "./components/Button";
import { MenuContent } from "./style";
import { useAuth } from "../../../../../../../context/AuthContext";


export default function Menu() {
    
    const { signOutReq } = useAuth();

    function userSignOut() {
        signOutReq();
    }

    return (
        <MenuContent>

            <Button action={userSignOut}>
                Sign out
            </Button>

        </MenuContent>
    );
}