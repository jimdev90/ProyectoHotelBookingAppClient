import {useState} from "react";
import { toast } from "react-toastify";
import LoginForm from "../components/LoginForm";
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("SED LOGIN DATA", { email, password })
        try{
            // let res = await login({email: email, password: password})
            // if (res.data){
            //     console.log('SAVE USER RES UN REDUX AND LOCALSTORAGE THEN REDIRECT ===>')
            //     // console.log(res.data)
            //     // save user and token to local storage
            //     window.localStorage.setItem("auth", JSON.stringify(res.data));
            //     // save user and token to redux
            //     dispatch({
            //         type: 'LOGGED_IN_USER',
            //         payload: res.data
            //     })
            //
            //     history.push("/")
            //
            // }

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