import React from 'react';
import { CartButton } from '../components';
import { useParams } from 'react-router-dom';
import { ProductsData } from '../json/products';


export const ComicsDetails = () => {
  const {productId} = useParams();
  const producto = ProductsData.find((p) => p.id === productId);

  if (!producto) {
    return <div>Producto no encontrado</div>
  }

  return(
    <div className="detalle-producto">
        <h1>{producto.nombre}</h1>
        <img src={producto.imagen} alt={producto.nombre} className="img-fluid"/>
        <p>{producto.descripcion}</p>
        <span className='precio'>${producto.precio}</span>      

        <CartButton/>
        
    </div>
  );
      
};
