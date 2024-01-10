import './Products.css'
const Product = ({product}) => {

return (
<div>
    <div className="product-img">
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
    </div>
</div>
)
}

export default Product