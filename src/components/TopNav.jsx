import {Link} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Dashboard from "../user/Dashboard.jsx";


const TopNav = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { auth } = useSelector((state) => ({...state}));
    const logout = () => {
        dispatch({
            type: 'LOGOUT',
            payload: null
        })

        window.localStorage.removeItem("auth")
        navigate("/login")

    }
    return (
        <div className="nav bg-light d-flex justify-content-between">
            <Link className="nav-link" to="/">Home</Link>

            {
                auth !== null && (
                    <Link className="nav-link" to="/dashboard">
                        Dashboard
                    </Link>
                )
            }

            {
                auth !== null && (
                    <a className="nav-link pointer" onClick={logout}>Cerrar Sesión</a>
                )
            }

            {
                auth === null && (
                    <>
                        <Link className="nav-link" to="/login">
                            Login
                        </Link>
                        <Link className="nav-link" to="/register">
                            Registro
                        </Link>
                    </>
                )
            }

        </div>
    )
}

export default TopNav
