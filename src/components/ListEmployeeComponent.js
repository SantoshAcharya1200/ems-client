import React,{useState,useEffect} from 'react'
import EmployeeServices from '../services/EmployeeServices'

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        EmployeeServices.getAllEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })}, [])

    
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
                                <td> {employee.first_name} </td>
                                <td>{employee.middle_name}</td>
                                <td>{employee.last_name}</td>
                                <td>{employee.gender}</td>
                                <td>{employee.age}</td>
                                <td>{employee.address}</td>
                                <td>{employee.contact_details}</td>
                            </tr>
                        )
                    }
                </tbody>
    </table>
    </div>
  )
}

export default ListEmployeeComponent