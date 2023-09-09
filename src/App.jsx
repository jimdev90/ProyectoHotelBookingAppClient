import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import TopNav from "./components/TopNav.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

//componentes
import Home from "./booking/Home.jsx";
import Login from "./auth/Login.jsx";
import Register from "./auth/Register.jsx";
import Dashboard from "./user/Dashboard.jsx";
import DashboardSeller from "./user/DashboardSeller.jsx";
import NewHotel from "./hotels/NewHotel.jsx";


function App() {
    return (
        <BrowserRouter>

            <TopNav/>
            <ToastContainer />
            <Routes>
                <Route exact path="/" element={ <Home /> }/>
                <Route exact path="/login" element={ <Login /> }/>
                <Route exact path="/register" element={ <Register /> }/>
                <Route
                    exact path="/dashboard"
                    element={
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                    }/>

                <Route
                    exact path="/dashboard/vendedor"
                    element={
                        <PrivateRoute>
                            <DashboardSeller />
                        </PrivateRoute>
                    }/>

                <Route
                    exact path="/hotels/new"
                    element={
                        <PrivateRoute>
                            <NewHotel />
                        </PrivateRoute>
                    }/>

            </Routes>

        </BrowserRouter>
    )
}

export default App
