import {Link} from "react-router-dom";


const TopNav = () => {
    return (
        <div className="nav bg-light d-flex justify-content-between">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/login">Iniciar Sesión</Link>
            <Link className="nav-link" to="/register">Registro</Link>
        </div>
    );
}

export default TopNav;