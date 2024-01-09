import { useState, useEffect } from "react";
import './ListProducts.css'

const ListProducts = () => {
    const [products, setProducts] = useState([])
    const [filtered, setFiltereds] = useState([])
    const [filters, setFilters] = useState(['from', 'to'])
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
    return (
        <>
            <div id="price-filter">
                <label htmlFor="from">from</label>
                <input id="from" value={filters.from} type="text" />
                <label htmlFor="to">to</label>
                <input id="to" value={filters.to} type="text" />
                <button type="button" onClick={filter}>filtrar</button>
                <button type="button" onClick={restore}>restore</button>
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