import Dashboard from "../../components/Dashboard";

import Sidebar from "./SecuritySidebar";
import "../admin/admin.css";
const SecurityDashboard = () => {
    return (
        <section className="admin-dashboard">
        <Sidebar />
        <Dashboard />
        </section>
        );
}
export default SecurityDashboard;