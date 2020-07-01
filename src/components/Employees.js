import React from 'react'
import Employee from './Employee'

function Empolyees({employees}) {
    
    return (
        <div className="employees">
            {employees.map((employee, index) => (
                <Employee 
                key={index} 
                firstName={employee.firstname} 
                lastName={employee.lastname} 
                job={employee.job}
                avatar={employee.avatar}
                id={employee.id}
                />
            ))}
        </div>
    )
}

export default Empolyees
