import React, { useContext } from "react";
import styles from "./Button.module.css";
import { ThemeContext } from "../../context";


export const ButtonComponent = (props) => {
    
    const {isDarkKnight} = useContext(ThemeContext);
    
    const [contador, setContador] = React.useState(0);
    const addContador = () => {
        setContador(contador + 1)
    };
    const lessContador = () => {
        setContador(contador - 1)
    };
    
    return(
        <div>
            <div className={isDarkKnight ? styles.botones : 
                styles.botonesDark}>
                <button onClick={lessContador}>-</button>
                <div>{contador}</div>
                <button onClick={addContador}>+</button>
            </div>

            <div className={isDarkKnight ? styles.agregar : 
                styles.agregarDark}>
                <button>Agregar al carrito</button>
            </div>
            
        </div>
    );
}