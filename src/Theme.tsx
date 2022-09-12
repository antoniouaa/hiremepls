import React from "react";

type Attribute = Record<string, string>
const themeAttrs: Record<string, Attribute> = {
    "light": {
        "backgroundColor": "#e5e4e2",
        "color": "#000000",
        "links": "blue",
    },
    "dark": {
        "backgroundColor": "#232425",
        "color": "#bdc3c7",
        "links": "lightblue",
    }
};

type ThemeSelector = "light" | "dark";
export type Theme = {
    themeSelector: ThemeSelector,
    toggleTheme: () => void,
    theme: Attribute,
};

interface Props {
    children?: React.ReactNode
}

export const ThemeContext = React.createContext<Theme>({} as Theme);

export const ThemeProvider = ({ children }: Props) => {
    const getThemeFromLocalStorage = () => {
        const theme = localStorage.getItem("theme");
        return theme ? theme : "light";
    }

    const storeTheme = (themeSelector: ThemeSelector) => {
        localStorage.setItem("theme", themeSelector);
    }

    const themeFromLocalStorage = getThemeFromLocalStorage();
    const [themeSelector, setThemeSelector] = React.useState<ThemeSelector>(themeFromLocalStorage as ThemeSelector);
    const toggleTheme = () => {
        const theme = themeSelector === "light" ? "dark" : "light";
        storeTheme(theme);
        setThemeSelector(theme);
    };

    const color = themeAttrs[themeSelector].color;
    const backgroundColor = themeAttrs[themeSelector].backgroundColor;

    document.body.style.color = color;
    document.body.style.backgroundColor = backgroundColor;

    return <ThemeContext.Provider value={{ themeSelector, toggleTheme, theme: themeAttrs[themeSelector] }}>
        {children}
    </ThemeContext.Provider>
}