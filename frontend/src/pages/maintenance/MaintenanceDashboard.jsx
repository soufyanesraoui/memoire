import Dashboard from "../../components/Dashboard";

import MaintenanceSidebar from "./MaintenanceSidebar";
import "../admin/admin.css";
const MaintenanceDashboard = () => {
    return (
        <section className="admin-dashboard">
        <MaintenanceSidebar />
        <Dashboard />
        </section>
        );
}
export default MaintenanceDashboard;