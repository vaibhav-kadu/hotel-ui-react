import React from 'react'

function StatCard({ title, value, subtitle }) {
    return (
        <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
                <h5 className="text-muted">{title}</h5>
                <p className="fw-muted">{value}</p>
                <p className="mb-0 text-secondary">{subtitle}</p>
            </div>
        </div>
    );
}

export default StatCard;