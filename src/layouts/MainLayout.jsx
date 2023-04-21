import React, {useContext} from "react";
import { ThemeContext } from "../context";

export const MainLayout = ({children}) => {

    const {isDarkKnight} = useContext(ThemeContext);


    const mainLayoutStyles = {
            backgroundColor: isDarkKnight ? "rgb(73, 73, 175)" : "rgba(52, 52, 54, 0.757)",
            color: isDarkKnight ? "white" : "black",
            position: "fixed",
            width: "100%",
            height: "85%",
            top: "15%",
    };

    return (
        <div style={mainLayoutStyles}>
            {children}
        </div>
    );
};