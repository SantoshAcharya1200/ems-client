import React,{useState} from 'react'

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([])
    
  return (
    <div className = "container">
    <h2 className = "text-center"> List Employees </h2>
    <table className="table table-bordered table-striped">
        <thead>
            <th> Employee Id </th>
            <th> First Name </th>
            <th> Middle Name </th>
            <th> Last Name </th>
            <th> Gender </th>
            <th> Age </th>
            <th> Address </th>
            <th> Contact details </th>
        </thead>
        <tbody>
                    {
                        employees.map(
                            employee =>
                            <tr key = {employee.id}> 
                                <td> {employee.id} </td>
                                <td> {employee.firstName} </td>
                                <td>{employee.middleName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.gender}</td>
                                <td>{employee.age}</td>
                                <td>{employee.address}</td>
                                <td>{employee.contactDetails}</td>
                            </tr>
                        )
                    }
                </tbody>
    </table>
    </div>
  )
}

export default ListEmployeeComponent