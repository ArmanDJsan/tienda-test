import { useState, useEffect } from "react";
import Product from "./product";

    const ListProducts = () =>{
    const [products, setProducts] = useState([])
    useEffect(() =>{
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => setProducts(data))
    
    },[]);
    return(
        <>
            {products.map((element) => 
                <Product product={element} key={element.id} />
                )}
        </>
    )
}
export default ListProducts