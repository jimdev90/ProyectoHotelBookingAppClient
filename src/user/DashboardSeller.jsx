import DashboardNav from "../components/DashboardNav.jsx";
const DashboardSeller = () => {

    return (
        <>
            <div className="container-fluid bg-secondary p-5">
                <h1>Dashboard</h1>
            </div>
            <div className="container-fluid p-4">
                <DashboardNav />
            </div>
            <div className="container">
                <p>muestra todos los hoteles que los usuarios han publicado y un botón para agregar nuevos</p>
            </div>
        </>
    )
}


export default DashboardSeller;
