import Dashboard from "../../components/Dashboard";

import Sidebar from "./OperatorSidebar";
import "../admin/admin.css";
const OperatorDashboard = () => {
    return (
        <section className="admin-dashboard">
        <Sidebar />
        <Dashboard />
        </section>
        );
}
export default OperatorDashboard;