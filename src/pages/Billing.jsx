function Billing() {

    const bills = [
        { id: 1, customer: "Rahul Sharma", amount: "₹2,500", status: "Paid"},
        { id: 2, customer: "Sneha Patil", amount: "₹4,200", status: "Pending"},
        { id: 3, customer: "Amit Verma", amount: "₹1,850", status: "Paid"}
    ];


    return (
        <div className="container-fluid">
            <div className="mb-4">
                <h2 className="fw-bold">Billing</h2>
                <p className="text-muted mb-0">Track invoices and payments.</p>
            </div>

            <div className="card shadow-sm border-0">
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-striped align-middle">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Customer</th>
                                    <th>Amount</th>
                                    <th>Payment Status</th>
                                </tr>
                            </thead>
                            <tbodt>
                                {bills.map((bill) => (
                                    <tr key={bill.id}>
                                        <td>{bill.id}</td>
                                        <td>{bill.customer}</td>
                                        <td>{bill.amount}</td>
                                        <td>{bill.status}</td>
                                    </tr>
                                ))}
                            </tbodt>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Billing;