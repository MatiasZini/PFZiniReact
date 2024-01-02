import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
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
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("Cantidad agregada", quantity)} />
            </footer>
        </article>
    )
}

export default ItemDetail;