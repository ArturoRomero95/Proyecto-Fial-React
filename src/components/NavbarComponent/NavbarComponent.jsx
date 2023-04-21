import React from "react";
import NavItem from "./NavItem";
import styles from "./Nav.module.css";
import logo from "../../imgs/logo.jpg";
import { ThemeContext } from "../../context";
import { CartComponent } from "../CartComponent/CartComponent";

export const NavBarComponent = () => {

    const {isDarkKnight, setIsDarkKnight} = React.useContext(ThemeContext);

    const handleThemeChange = () =>{
        setIsDarkKnight(!isDarkKnight);
    }

    return(
        <div className={isDarkKnight ? styles.navbar : styles.navbarDark}>
                    <img src={logo} className={styles.logo}/>
                    <NavItem label = "Inicio" src= "/" />
                    <NavItem label = "Comics" src = "/comics"/>
                    <button onClick = {handleThemeChange}>{isDarkKnight ? "Dark Knight" : "Man of Steel"}</button>
                    <CartComponent/>
        </div>
    );
}