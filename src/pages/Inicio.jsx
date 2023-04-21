import React from "react";
import Banner from "../imgs/Banner.jpg"

export const Inicio = () => {
    return (
        <div style={{display: "flex", flexDirection: "row"}}>
            <div>
            <img src={Banner} alt="" style={{width: "40%", margin: "50px", paddingLeft: "200px"}}/>
            </div>
            <div style={{marginRight: "300px", paddingTop: "100px"}}>
            <h1>Bienvenido a tu tienda de cómics favorita</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
            <p></p>
        </div>
    )
}