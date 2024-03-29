import {useState} from "react";
import RegisterForm from "../components/RegisterForm.jsx";
import {toast} from "react-toastify";
import { register } from "../actions/auth";
import {useNavigate} from "react-router-dom";


const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log("registrando usuario")
            const res = await register({
                name: name,
                email: email,
                password: password
            })
            console.log('Registrando usuario ===> ', res)
            toast.success('Registro exitoso. Por favor inicie sesión')
            navigate('/login')
        }catch (err) {
            console.log(err)
            if (err.response.status === 400) toast.error(err.response.data)
        }
    }

    return (
       <>
           <div className="container-fluid bg-secondary p-5 text-center">
               <h1>Registro</h1>
           </div>
           <div className="container">
               <div className="row">
                   <div className="col-md-6 offset-md-3">
                       <RegisterForm
                           handleSubmit={handleSubmit}
                           name={name}
                           setName={setName}
                           email={email}
                           setEmail={setEmail}
                           password={password}
                           setPassword={setPassword}
                       />
                   </div>
               </div>
           </div>
       </>
    );

}

export default Register;