import Dashboard from "../../components/Dashboard";

import Sidebar from "./DispatcherSidebar";
import "../admin/admin.css";
const DispatcherDashboard = () => {
    return (
        <section className="admin-dashboard">
        <Sidebar />
        <Dashboard />
        </section>
        );
}
export default DispatcherDashboard;