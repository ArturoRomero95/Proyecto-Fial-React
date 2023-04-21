import React from "react";
import { ProductsData } from "../json/products";
/*import {collection, getDocs, getFirestore} from "firebase/firestore";*/
import { CardComponent } from "../components";


export const Comics = () => {
    return(
    <div className="productos">
        {ProductsData.map((producto) => (
            <CardComponent key={producto.id} producto={producto} />
        ))}
    </div>
    )
};


    /*
    const[productsData, setProductsData] = React.useState([]);
    const [loading,setLoading] = React.useState(true);

    React.useEffect(() => {
        const db = getFirestore();

        const itemsCollection = collection(db, "productos");
        getDocs(itemsCollection).then((products) => {
            if (products.length === 0){
                console.log("No productos");
            }
        
        setProductsData(
            products.docs.map((doc) => ({id: doc.id, ...doc.data()}))
        );

        })
        .catch(err => console.log(err))
        .then(() => {
            console.log(productsData);
            setLoading(false);
        });

    }, []);

    if (!loading){
        console.log(productsData);
    }else {
        console.log("Loading");
    }

    return loading ? (
        <LoaderComponent/>
    ) : (
        <div className="productos">
            {productsData.map((producto) => (
                <CardComponent key={producto.id} producto={producto} />
            ))}
        </div>
    );*/

