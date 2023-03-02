import { createContext, useContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { colors } from "../styles/colors";
import { darkTheme, lightTheme } from "../styles/themes";


type ThemeProps = {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext({ } as ThemeProps);

type Props = {
    children: JSX.Element;
}

export default function ThemeContextProvider(props: Props) {
    const [theme, setTheme] = useState({
        ...lightTheme,
        ...colors
    });

    const [isDarkMode, setIsDarkMode] = useState(true);


    function toggleTheme() {
        setIsDarkMode(!isDarkMode);
        localStorage.setItem("darkMode", JSON.stringify(!isDarkMode));
    }

    useEffect(() => {
        const localDarkMode = localStorage.getItem("darkMode");
        if(localDarkMode) {
            const parse: boolean = JSON.parse(localDarkMode);
            setIsDarkMode(parse);
        }
    }, [setIsDarkMode]);

    useEffect(() => {
        if(isDarkMode === true) setTheme({...darkTheme, ...colors});
        else setTheme({ ...lightTheme, ...colors })
    }, [isDarkMode])

    return (
        <ThemeContext.Provider value={{
            isDarkMode,
            toggleTheme
        }}>
            <ThemeProvider theme={theme}>
                {props.children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}


export const useTheme = () => useContext(ThemeContext);