import {useState} from "react";
import { toast } from "react-toastify";
import LoginForm from "../components/LoginForm";
import { login } from "../actions/auth";
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch()
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("SED LOGIN DATA", { email, password })
        try{
            let res = await login({email: email, password: password})
            if (res.data){
                console.log('GUARDAR EL USUARIO RES UN REDUX Y LOCALSTORAGE, LUEGO REDIRIGIR ===>')
                // console.log(res.data)
                // guardar usuario y token en el almacenamiento local
                window.localStorage.setItem("auth", JSON.stringify(res.data));
                // guardar usuario y token en redux
                dispatch({
                    type: 'LOGGED_IN_USER',
                    payload: res.data
                })
                navigate("/")
            }

        }catch (err){
            console.log(err)
            if (err.response.status === 400) toast.error(err.response.data)
        }
    }
    return (
        <>
            <div className="container-fluid bg-secondary p-5 text-center">
                <h1>Login</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <LoginForm
                            handleSubmit={handleSubmit}
                            email={email}
                            password={password}
                            setEmail={setEmail}
                            setPassword={setPassword}
                        />
                    </div>
                </div>
            </div>

        </>
    );

}

export default Login;
