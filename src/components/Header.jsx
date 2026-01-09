function Header() {
    return (

        <header className="bg-dark text-white px-4 py-3 shadow-sm">
            <div className="d-flex justify-content-between align-items-center">
                <div>
                    <h2 className="m-0">🏨 Hotel System</h2>
                    <small className="text-light">Admin Dashboard</small>
                </div>
                <div>
                    <span className="fw-semibold">Welcome, Admin</span>
                </div>
            </div>
        </header>
    );
}

export default Header;
