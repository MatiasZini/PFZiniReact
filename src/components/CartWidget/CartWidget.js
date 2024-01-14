import bag from "./assets/bag_icon.png";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return ( 
        <Link to="/cart" style={{ display: totalQuantity > 0 ? "block" : "none"}}>
        <img src={bag} style={{width:"40px"}}/> 0
        </Link>
    )
}

export default CartWidget;