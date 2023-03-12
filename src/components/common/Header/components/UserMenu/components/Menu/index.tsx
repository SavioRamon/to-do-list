
import Button from "./components/Button";
import { MenuContent } from "./style";
import { useAuth } from "../../../../../../../context/AuthContext";
import { useTheme } from "../../../../../../../context/ThemeContext";
import { BsMoonStars, BsCloudSun, BsMoon } from "react-icons/bs";
import { GoSignOut } from "react-icons/go";

export default function Menu() {
    
    const { isDarkMode, toggleTheme } = useTheme();
    const { signOutReq } = useAuth();

    function userSignOut() {
        signOutReq();
    }

    return (
        <MenuContent>

            <Button
                action={toggleTheme}
                icon={isDarkMode? <BsMoonStars /> : <BsCloudSun /> }
            >
                Theme
            </Button>

            <Button
                action={userSignOut}
                icon={<GoSignOut />}
            >
                Sign out
            </Button>

        </MenuContent>
    );
}