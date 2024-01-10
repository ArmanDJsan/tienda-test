import React from 'react'
import { useState, useEffect, useContext } from "react";
import { ConText } from "../App";
import './ListProducts.css'

const ListProducts = () => {
    const [products, setProducts] = useState([])
    const [filtered, setFiltereds] = useState([])
    const [cart, setCart] = useContext(ConText)

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(response => response.json())
            .then(data => { setProducts(data), setFiltereds(data) })
    }, []);
    const filter = () => {
        let products2 = products.filter((product) => {
            const from = document.getElementById('from').value;
            const to = document.getElementById('to').value;
            if (product.price >= parseFloat(from) && product.price <= parseFloat(to)) {
                return (product);
            }
        })
        setFiltereds(products2);
    }
    const restore = () => {
        setFiltereds(products);
    }

    const subs = (item) => {
        const index = cart.findIndex((elemento) => elemento.product.id === item.id);
        let aux = [...cart];
        if (aux[index].qty > 1) {
            setCart(aux[index].qty--);
        }
        else {
            setCart(aux.toSpliced(index, 1));
        }
    }

    const addToCart = (item) => {
        const index = cart.findIndex((elemento) => elemento.product.id === item.id);
        let aux = [...cart];
        if (index >= 0) {
            aux[index].qty++;
        } else {
            aux.push({ 'product': item, 'qty': 1 });
        }
        setCart(aux);
    }
    return (
        <div id="container">
            <div id="price-filter">
                <div>
                    <label htmlFor="from">from</label>
                    <input id="from" type="text" />
                </div>
                <div>
                    <label htmlFor="to">to</label>
                    <input id="to" type="text" />
                </div>
                <div>
                    <button type="button" onClick={filter}>filtrar</button>
                    <button type="button" onClick={restore}>restore</button>
                </div>
            </div>
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
                    {filtered.map((product) =>
                        <tr key={product.id} className="table-row">
                            <td>
                                <div className="product-box" >
                                    <img src={product.image} alt="imagen del producto" height={120} width={120} />
                                </div>
                            </td>
                            <td>{product.title}</td>
                            <td>
                                <p>{product.price}$</p>
                                <button type="button" onClick={() => addToCart(product)}>buy</button>
                            </td>
                        </tr>
                    )}
                </tbody >
            </table>
        </div>
    )
}
export default ListProducts