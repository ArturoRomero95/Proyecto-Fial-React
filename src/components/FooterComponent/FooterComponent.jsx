import React from "react";
import styles from "./Footer.module.css"
import { ThemeContext } from "../../context";

export const FooterComponent = () => {

    const {isDarkKnight} = React.useContext(ThemeContext);

    return(
        <footer className={isDarkKnight ? styles.foot : styles.footDark}>
            <p>Avenida reforma esquina con Hidalgo Centro, Cuauhtémoc, 06000 Ciudad de México, CDMX</p>
            <p>55-87-91-99-01</p>
            <p>chensoncomics@gmial.com</p>
        </footer>
    );
}