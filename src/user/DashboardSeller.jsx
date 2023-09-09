import {useState} from "react";
import DashboardNav from "../components/DashboardNav.jsx";
import ConnectNav from "../components/ConnectNav.jsx";
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
import { HomeOutlined } from "@ant-design/icons";
import { createConnectAcount } from "../actions/stripe.js";
import { toast } from "react-toastify";


const DashboardSeller = () => {

    const { auth } = useSelector((state) => ({...state}))
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        setLoading(true);
        try {
            let res = await createConnectAcount(auth.token);
            console.log(res);
        }catch (e) {
            console.log(e);
            toast.error(`Error en la conexión de Stripe. Inténtalo de nuevo.`);
            setLoading(false);
        }
    }
    const connected = () => {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10">
                        <h2>Your Hotels</h2>
                    </div>
                    <div className="col-md-2">
                        <Link to="/hotels/new" className="btn btn-primary">+ Registrar Nuevo</Link>
                    </div>
                </div>
            </div>
        )
    }

    const noConnected = () => {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 offset-md-3 text-center">
                        <div className="p-5 pinter">
                            <HomeOutlined className="h1" />
                            <h4>Configuración de pagos para publicar habitaciones de hotel</h4>
                            <p className="lead">MERN se asocia con Stripe para transferir ganancias a su banco</p>
                            <button
                                disabled={loading}
                                onClick={handleClick}
                                className="btn btn-primary mb-3">
                                { loading ? 'Procesando...' : 'Configuración de pagos'}
                            </button>
                            <p className="text-muted">
                                <small>
                                    Serás redireccionado a Stripe para completar la incorporación
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="container-fluid bg-secondary p-5">
                <ConnectNav />
            </div>
            <div className="container-fluid p-4">
                <DashboardNav />
            </div>
            {
                auth &&
                auth.user &&
                auth.user.stripe_seller &&
                auth.user.stripe_seller.charges_enabled
                    ? connected()
                    : noConnected()
            }
            {/*<pre>{JSON.stringify(auth, null, 4)}</pre>*/}
        </>
    )
}


export default DashboardSeller;
