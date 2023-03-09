import { Button, Content, ImageLogo } from "./style";
import LogoDark from "../../../../../assets/icons/logoDark.svg";
import LogoLight from "../../../../../assets/icons/logoLight.svg";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../../../../context/ThemeContext";

export default function Logo() {
    const { isDarkMode } = useTheme();
    const navigate = useNavigate();

    function navigateToHomeScreen() {
        navigate("/");
    }

    return (
        <Content>
            <Button onClick={navigateToHomeScreen}>
                {isDarkMode?
                        <ImageLogo src={LogoDark} alt="" />
                    :
                        <ImageLogo src={LogoLight} alt="" />
                }
            </Button>
        </Content>
    )
}