import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./booking/Home.jsx";
import Login from "./auth/Login.jsx";
import Register from "./auth/Register.jsx";
import TopNav from "./components/TopNav.jsx";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

function App() {
    return (
        <BrowserRouter>

            <TopNav/>
            <ToastContainer />
            <Routes>
                <Route exact path="/login" element={ <Login /> }/>
                <Route exact path="/register" element={ <Register /> }/>
                <Route exact path="/" element={ <Home /> }/>
            </Routes>

        </BrowserRouter>
    )
}

export default App
