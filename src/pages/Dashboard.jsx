import StatCard from "../components/StatCard";

function Dashboard() {
    return (
        <div className="container-fluid">
            <div className="mb-4">
                <h2 className="fw-bold">Dashboard</h2>
                <p className="text-muted mb-0">Monitor hotel operations from one place.</p>
            </div>
            <div className="row g-4 mb-4">
                <div className="col-md-6 col-xl-3">
                    <StatCard title="Total Rooms" value="120"subtitle="All hotel rooms"/>
                </div>
                <div className="col-md-6 col-xl-3">
                    <StatCard title="Occupied Rooms" value="86" subtitle="Currently booked"/>
                </div>
                <div className="col-md-6 col-xl-3">
                    <StatCard title="Pending Orders" value="24" subtitle="Kitchen requests" />
                </div>
                <div className="col-md-6 col-xl-3">
                    <StatCard title="Total Revenue" value="₹48,500" subtitle="Billing Summary"/>
                </div>
            </div>

            <div className="row g-4">
                <div className="col-lg-8">
                    <div className="card shadow-sm border-0">
                        <div className="card-body">
                            <h5 className="card-title">Recent Activity</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-items">Room 203 checked in</li>
                                <li className="list-group-items">Table 5 order sent to kitchen</li>
                                <li className="list-group-items">Invoice generated for Room 108</li>
                                <li className="list-group-items">New customer booking added</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card shadow-sm border-0">
                        <div className="card-body">
                            <h5 className="card-title">Quick Summary</h5>
                            <p className="text-muted">
                                Occupancy is high today and kitchen orders are active. Billing is stable.
                            </p>
                            <button className="btn btn-primary">View Full Report</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;