import React from 'react'

function Employee({ firstName, lastName,avatar, job, id }) {
    let src = `${avatar}?u=${id}`
    return (
        <div className="employee">
            <div className="employee-avatar">
                <img src={src} className="img" alt="employee" />
            </div>
            <div className="employee-desc text-center">
                <h3 className="employee-name light-text regular-text">{firstName} {lastName}</h3>
                <h5 className="employee-job light-text">{job}</h5>
            </div>
        </div>
    )
}

export default Employee
