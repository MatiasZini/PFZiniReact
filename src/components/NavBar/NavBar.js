import CartWidget from "../CartWidget/CartWidget";

const NavBar = (imgLogo) => {
    const {img} = imgLogo;

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <a className="navbar-item" href="#">
                    <img src={img} alt="logo" />
                </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <a class="navbar-item" href="#">
                        INICIO
                    </a>

                    <a className="navbar-item" href="#">
                        PRODUCTOS
                    </a>
                    <a className="navbar-item" href="#">
                        VENTAS
                    </a>
                    <a className="navbar-item" href="#">
                        QUIENES SOMOS
                    </a>
                </div>
            </div>
<CartWidget/>
        </nav>
    )
}

export default NavBar;