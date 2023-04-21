import React from "react";
import { Link } from "react-router-dom";

export const CardComponent = ({producto}) => {
  return (
    <Link to={`/comics/${producto.id}`} className="card-link">

        <div style={{display: "flex", flexDirection: "row", justifyContent: "center",}}>

          <img
            src={producto.imagen}
            alt={producto.nombre}
            style={{margin: "20px",}}
          />

          <div style={{color: "white"}}>

            <h5>{producto.nombre}</h5>
            <p>{producto.descripcion}</p>
            <p>${producto.precio}</p>

          </div>

        </div>
    
    </Link>
  )
}


