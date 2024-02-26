import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import AttendanceServices from '../services/AttendanceServices'

const ListAttendanceComponent = () => {
    const [attendance, setAttendance] = useState([])

    useEffect(() => {
        AttendanceServices.getAllAttendance().then((response) => {
            setAttendance(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })}, [])

    
  return (
    <div className = "container">
    <h2 className = "text-center"> List attendance </h2>
    <Link to = "/add-attendance" className = "btn btn-primary mb-2" > Add Attendance </Link>


    <table className="table table-bordered table-striped">
        <thead>
            <th> Employee Id </th>
            <th> Attendance Id </th>
            <th> Attendance Date </th>
            <th> Attendance Status </th>
            <th> Attendance Time </th>
            <th> Actions </th>
        </thead>
        <tbody>
                    {
                        attendance.map(
                            // employee =>
                            // <tr key = {employee.id}>
                                 attendance =>
                            <tr key = {attendance.id}>  
                            
                                <td> {attendance.employee.id} </td>
                                <td> {attendance.id} </td>
                                <td> {attendance.attendance_date} </td>
                                <td>{attendance.attendance_status}</td>
                                <td>{attendance.attendance_time}</td>
                               
                                <td>
                                    <Link className="btn btn-info" to={`/edit-employee/${attendance.id}`} >View Details</Link>
                                  
                                </td>
                            </tr>
                        )
                    }
                </tbody>
    </table>
    </div>
  )
}

export default ListAttendanceComponent