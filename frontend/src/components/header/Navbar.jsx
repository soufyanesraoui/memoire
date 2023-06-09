import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
const Navbar = ({ toggle, setToggle }) => {
  const { user } = useSelector(state => state.auth)
  return (
    <nav
      style={{ clipPath: toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
      className="navbar"
    >
      <ul className="nav-links">
        <Link onClick={() => setToggle(false)} to="/" className="nav-link">
          <i className="bi bi-house"></i>
          Home
        </Link>
        <Link onClick={() => setToggle(false)} to="/posts" className="nav-link">
          <i className="bi bi-stickies"></i>
          Posts
        </Link>
        {
          user && (
            <Link
                  onClick={() => setToggle(false)}
                  to="/posts/create"
                  className="nav-link"
                >
                  <i className="bi bi-journal-plus"></i>
                  Create
            </Link>
          )
        }
        {
          user?.isAdmin &&(
          <Link
              onClick={() => setToggle(false)}
              to="/admin-dashboard"
              className="nav-link"
          >
          <i className="bi bi-person-check"></i>
          Admin
          </Link>
          )
          }
          {
            user?.isDispatcher &&(
            <Link
                onClick={() => setToggle(false)}
                to="/dispatcher"
                className="nav-link"
            >
            <i className="bi bi-person-check"></i>
              Dispatcher
            </Link>
            )
            }
          {
            user?.isOperator &&(
            <Link
                onClick={() => setToggle(false)}
                to="/operator"
                className="nav-link"
            >
            <i className="bi bi-person-check"></i>
              Operator
            </Link>
            )
            }
          {
            user?.isSecurityAgent &&(
            <Link
                onClick={() => setToggle(false)}
                to="/securityagent"
                className="nav-link"
            >
            <i className="bi bi-person-check"></i>
            Security Agent
            </Link>
            )
            }
          {
            user?.isMaintenanceAgent &&(
            <Link
                onClick={() => setToggle(false)}
                to="/Maintenance"
                className="nav-link"
            >
            <i className="bi bi-person-check"></i>
            Maintenance Agent
            </Link>
            )
            }
      </ul>
    </nav>
  );
};
export default Navbar;