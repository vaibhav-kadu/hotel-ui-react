import { Link, NavLink } from "react-router-dom";


function Sidebar() {
    const menuClass = ({ isActive }) =>
        `nav-link rounded px-3 py-2 mb-2 ${isActive ? " bg-primary text-white" : "text-dark"}`;
    return (
        <aside className="bg-light border-end p-3" style={{ width: "250px", minHeight: "100vh" }}>
            <h5 className="mb-4"
            >Navigation</h5>

            <nav className="nav flex-column">
                <NavLink to="/" className={menuClass}>
                    Dashboard
                </NavLink>
                <NavLink to="/orders" className={menuClass}>
                    Orders
                </NavLink>
                <NavLink to="/billing" className={menuClass}>
                    Billing
                </NavLink>
            </nav>
        </aside>
    );
}

export default Sidebar;