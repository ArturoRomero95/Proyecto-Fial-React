import React, {createContext, useEffect, useState} from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [isDarkKnight, setIsDarkKnight] = useState(localStorage.getItem("isDarkKnight") === "false" || true);

    useEffect(() => {
        localStorage.setItem('isDarkKnight', isDarkKnight);
    }, [isDarkKnight]);

    return(
        <ThemeContext.Provider value={{isDarkKnight, setIsDarkKnight}}>
            {children}
        </ThemeContext.Provider>
    )
};