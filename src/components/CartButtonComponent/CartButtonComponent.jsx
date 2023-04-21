import {useParams} from "react-router-dom";
import React, {useState, useContext} from "react";
import { CartContext } from "../../context";
import {ThemeContext} from "../../context/ThemeContext";
import styles from "./Cart.module.css";

export const CartButton = () => {
    const [state, setState] = useState(1);
    const {itemCount, setItemCount} = useContext(CartContext);
    const {productId} = useParams();

    const handleMoreClick = () => {
        if (state === 5) return;
        setState(state + 1);
    }
    const handleLessClick = () => {
        if (state === 1) return;
        setState(state - 1);
    };

    const addToCart = () => {
        const existingProduct = itemCount.products.find(
            (p) => p.productId === productId
        );

        if (existingProduct){
            existingProduct.qty += state;
        }else{
            const newProduct = {
                productId,
                qty: state,
            };
            setItemCount((prevState) => ({
                qtyItems: prevState.qtyItems + state,
                products: [...prevState.products, newProduct],
            }));
        }
    }

    const {isDarkKnight} = useContext(ThemeContext);

    return (
        <div>
            <div className={isDarkKnight ? styles.botones : 
                styles.botonesDark}>
                <button onClick={handleLessClick}>
                    -
                </button>
                <div>{state}</div>
                <button onClick={handleMoreClick}>
                    +
                </button>
            </div >

            <div className={isDarkKnight ? styles.agregar : 
                styles.agregarDark}>
            <button onClick={addToCart}>
                Agregar al carrito
            </button>
            </div>

        </div>
    )
};
