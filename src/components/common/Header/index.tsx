import { useAuth } from "../../../context/AuthContext";
import LoginButton from "./components/LoginButton";
import Logo from "./components/Logo";
import UserMenu from "./components/UserMenu";
import { Content } from "./style";


export default function Header() {

    const { user, load } = useAuth();

    return (
        <Content>
            <Logo />

            {user && !load &&
                <UserMenu />
            }

            {!user && !load &&
                <LoginButton />
            }
        </Content>
    )
}