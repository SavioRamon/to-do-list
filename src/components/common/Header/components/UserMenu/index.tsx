import { useState } from "react";
import Menu from "./components/Menu";
import UserButton from "./components/UserButton";
import { Content } from "./style";


export default function UserMenu() {

    const [openMenu, setOpenMenu] = useState(false);

    function toggleMenu() {
        setOpenMenu(!openMenu);
    }

    return (
        <Content>
            <UserButton action={ toggleMenu } />

            {openMenu &&
                <Menu />
            }
        </Content>
    );
}