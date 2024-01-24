import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import {Link, NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <header>
                <Link to="/">
                <h1>Greenfort</h1>
                </Link>

                <nav>
                    <ul>
                        <li>
                            <NavLink to="/categoria/1">
                                Cápsulas
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/categoria/2">
                                Cremas
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/categoria/3">
                                Gotas
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <CartWidget/>
            </header>
        </div>
    )
}

export default NavBar