function Orders() {

    const orders = [
        {id: 1, table: "Table 1", item: "Panner Butter Masala", status: "Preparing"},
        {id: 2, table: "Table 3", item: "Veg Biryani", status: "Ready"},
        {id: 3, table: "Table 105", item: "Masala Dosa", status: "Pending"}
    ];

    return (
        <div className="container-fluid">
            <div className="mb-4">
                <h2 className="fw-bold">Orders</h2>
                <p className="text-muted mb-0">Manage restaurant and room service orders.</p>
            </div>

            <div className="card shadow-sm border-0">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table tale-hover align-middle">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Source</th>
                                    <th>Item</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order) => (
                                    <tr key={order.id}>
                                        <td>{order.id}</td>
                                        <td>{order.table}</td>
                                        <td>{order.item}</td>
                                        <td>{order.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Orders;