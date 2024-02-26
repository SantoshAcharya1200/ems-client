import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AttendanceServices from '../services/AttendanceServices';

const ListAttendanceComponent = () => {
    const [attendance, setAttendance] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    useEffect(() => {
        fetchAttendance();
        fetchEmployees();
    }, []);

    const fetchAttendance = () => {
        AttendanceServices.getAllAttendance()
            .then((response) => {
                setAttendance(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const fetchEmployees = () => {
        AttendanceServices.getAllEmployees()
            .then((response) => {
                setEmployees(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleEmployeeChange = (e) => {
        const selectedEmployeeId = e.target.value;
        const employee = employees.find(emp => emp.id === parseInt(selectedEmployeeId));
        setSelectedEmployee(employee);
    };

    return (
        <div className="container">
            <h2 className="text-center">List attendance</h2>
            <div className="mb-3">
                <Link to="/add-attendance" className="btn btn-primary">Add Attendance</Link>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <h3>Attendance List</h3>
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Employee Id</th>
                                <th>Attendance Id</th>
                                <th>Attendance Date</th>
                                <th>Attendance Status</th>
                                <th>Attendance Time</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {attendance.map(item => (
                                <tr key={item.id}>
                                    <td>{item.employee.id}</td>
                                    <td>{item.id}</td>
                                    <td>{item.attendance_date}</td>
                                    <td>{item.attendance_status}</td>
                                    <td>{item.attendance_time}</td>
                                    <td>
                                        <Link className="btn btn-info" to={`/edit-employee/${item.id}`}>View Details</Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="col-md-12">
                    <h3>Select Employee</h3>
                    <select
                        className="form-control"
                        onChange={handleEmployeeChange}
                    >
                        <option value="">Select Employee</option>
                        {employees.map(employee => (
                            <option key={employee.id} value={employee.id}>
                                {employee.first_name} {employee.last_name}
                            </option>
                        ))}
                    </select>
                    {selectedEmployee && (
                        <div>
                            <h4>Attendance Details for {selectedEmployee.first_name} {selectedEmployee.last_name}</h4>
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>Employee Id</th>
                                        <th>Attendance Id</th>
                                        <th>Attendance Date</th>
                                        <th>Attendance Status</th>
                                        <th>Attendance Time</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {attendance.map(item => (
                                        item.employee.id === selectedEmployee.id && (
                                            <tr key={item.id}>
                                                <td>{item.employee.id}</td>
                                                <td>{item.id}</td>
                                                <td>{item.attendance_date}</td>
                                                <td>{item.attendance_status}</td>
                                                <td>{item.attendance_time}</td>
                                                <td>
                                                    <Link className="btn btn-info" to={`/edit-employee/${item.id}`}>View Details</Link>
                                                </td>
                                            </tr>
                                        )
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ListAttendanceComponent;
