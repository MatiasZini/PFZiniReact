import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    const {quantityAdded, setQuantityAdded} = useState(0);

    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity)
    }
    
    
    return (
        <article className="card">
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture className="card-image">
                <figure className="image is-4by3">
                    <img src={img} alt={name}/>
                </figure>
            </picture>
            <section className="card-content">
                <p>
                    Categoría: {category}
                </p>
                <p>
                    Descripción: {description}
                </p>
                <p>
                    Precio: ${price}
                </p>
            </section>
            <footer>
                {
                    quantityAdded >0 ? (
                        <Link to="cart">Terminar compra</Link>
                    ) : (
                <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail;