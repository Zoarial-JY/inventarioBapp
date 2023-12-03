import { Outlet, NavLink } from "react-router-dom";

const Layout = () =>{
    return <div>
        <nav>
            <ul>
                <li>
                    <NavLink end to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/inventario">Inventario</NavLink>
                </li>
                <li>
                    <NavLink to="/ventas">Ventas</NavLink>
                </li>
                <li>
                    <NavLink to="/ayuda">Ayuda</NavLink>
                </li>
                <li>
                    <NavLink to="/product">Product</NavLink>
                </li>
            </ul>
        </nav>
        <Outlet />
    </div>
}

export default Layout;