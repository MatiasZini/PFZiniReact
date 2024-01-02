import { Link } from "react-router-dom";

const Item = ({ id, name, img, price, stock }) => {
    return (
        <article className="card">
            <picture className="card-image">
                <figure className="image is-48x48">
                    <img src={img} alt={name} />
                </figure>
            </picture>
            <content className="card-content">
                <header className="media-content">
                    <h2 className="title is-4">
                        {name}
                    </h2>
                </header>
                <section>
                    <p>
                        Precio: ${price}
                    </p>
                    <p>
                        Stock disponible: {stock}
                    </p>
                </section>
                <footer>
                    <Link to={`/item/${id}`}>Ver detalle</Link>
                </footer>
            </content>
        </article>
    )
}

export default Item;
