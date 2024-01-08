import { useState, useEffect } from "react";
import './ListProducts.css'

const ListProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => setProducts(data))

    }, []);
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) =>
                        <tr key={product.id} className="table-row">
                            <td>
                                <div className="product-box" >
                                    <img src={product.image} alt="imagen del producto" height={120} width={120} />
                                </div>
                            </td>
                            <td>{product.title}</td>
                            <td>
                                <p>{product.price}$</p>
                                <button>buy</button>
                            </td>
                        </tr>
                    )}
                </tbody >
            </table>
        </>
    )
}
export default ListProducts