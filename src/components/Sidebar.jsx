import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div style={{width: "200px", background: "#eee", padding: "10px"}} >
            <h3>Menu</h3>

            <ul style={{ listStyle: "none", padding: 0 }} >
                <li><link to="/">Dashboard</link></li>
                <li><link to="/orders">Orders</link></li>
                <li><link to="/billing">Billing</link></li> 
            </ul>
        </div>
    );
}

export default Sidebar;