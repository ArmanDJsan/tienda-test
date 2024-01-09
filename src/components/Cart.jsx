import { useContext } from "react";
import { ConText } from "../App";

const Cart = () => {
    const [cart, setCart] = useContext(ConText)

    return (
        <>
            {cart.map((item) => <p key={item.product.id}>{item.qty} x {item.product.title}</p>)}
        </>
    )
}

export default Cart