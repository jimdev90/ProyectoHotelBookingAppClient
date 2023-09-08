import DashboardNav from "../components/DashboardNav.jsx";
const Dashboard = () => {

    return (
        <>
            <div className="container-fluid bg-secondary p-5">
                <h1>Dashboard</h1>
            </div>
            <div className="container-fluid p-4">
                <DashboardNav />
            </div>
            <div className="container">
                <p>Mostrar todas las reservas y un botón para buscar hoteles</p>
            </div>
        </>
    )
}


export default Dashboard;
