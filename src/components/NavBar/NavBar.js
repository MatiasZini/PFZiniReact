import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = (imgLogo) => {
    const {img} = imgLogo;

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <a className="navbar-item" href="#">
                    <img src={img} alt="logo" />
                </a>
            </div>
        <div>
            <Link to="/">INICIO</Link>
            <NavLink to={`/category/buzos`} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>BUZOS</NavLink>
            <NavLink to={`/category/accesorios`} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>ACCESORIOS</NavLink>
            <NavLink to={`/category/remeras`} className={({isActive}) => isActive ? "ActiveOption" : "Option"}>REMERAS</NavLink>
        </div>
<CartWidget/>
        </nav>
    )
}

export default NavBar;