
const Product = ({ product }) => {

    return (

        <div className="wrapper">
            <table>
                <thead>
                    <th>Product</th>
                    <th>Description</th>
                    <th>Price</th>
                </thead>
                <tbody>
                    <tr key={product.id}>
                    <td><img src={product.image} alt="imagen del producto" /></td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                    </tr>
                </tbody>
            </table>


        </div>
    )
}

export default Product



{/* <div className="product-img">
<img src={product.image} height={200} width={200} />
</div>
<div className="product-info">
<div className="product-text">
    <h1>{product.title}</h1>
    <p> {product.description} </p>
</div>
<div className="product-price-btn">
    <p><span>{product.price}</span>$</p>
    <button type="button">buy now</button>
</div>
</div> */}