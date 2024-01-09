import { useContext } from "react";
import { ConText } from "../App";
import './Cart.css';

const Cart = () => {
    const [cart, setCart] = useContext(ConText)
    const subs = (item) => {
        const index = cart.findIndex((elemento) => elemento.product.id === item.id);
        let aux = [...cart];
        if (aux[index].qty > 1) {
            aux[index].qty--;
            setCart(aux);
        }
        else {
            setCart(aux.toSpliced(index, 1));
        }
    }

    const add = (item) => {
        const index = cart.findIndex((elemento) => elemento.product.id === item.id);
        let aux = [...cart];
        if (index >= 0) {
            aux[index].qty++;
            setCart(aux);
        }

    }
    const CartElement = (item) => {
        return (
            <div className="cartElement" key={item.product.id}>
                <img src={item.product.image} alt="prouct image" height={75} width={75} />
                <div className="cartElementBoxR">
                    <p >{item.qty} x {item.product.title}</p>
                    <div className="cartElementBtn">
                        <button onClick={() => subs(item.product)} type="button">-</button>
                        {item.qty}
                        <button onClick={() => add(item.product)} type="button">+</button>
                    </div>
                </div>
            </div>
        )
    }
    const itemTotal = (item) =>{
       return item.product.price*item.qty;
    }

    const cartTotal = () => {
        const initialValue = 0;
        const total = cart.reduce((accumulator, currentValue) =>  accumulator + itemTotal(currentValue), initialValue);
        console.log(`total: ${total}`);
        return total;
    }

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cart.map((item) =>
                CartElement(item)
            )}
           <p> total: {cartTotal()}$</p>
            <button onClick={()=>alert('procesar pago')} type="button">pay</button>
        </div>
    )
}

export default Cart