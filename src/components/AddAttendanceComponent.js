import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import AttendanceServices from '../services/AttendanceServices';
import EmployeeServices from '../services/EmployeeServices'; // Import your employee service

const AddAttendanceComponent = () => {
    const [attendance_date, setAttendance_Date] = useState('');
    const [attendance_status, setAttendance_Status] = useState('');
    const [attendance_time, setAttendance_Time] = useState('');
    const [employee_id, setEmployee_Id] = useState('');
    const [employees, setEmployees] = useState([]); // State to hold employees
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        // Fetch employees when the component mounts
        EmployeeServices.getAllEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.log(error);
        });

        if (id) {
            AttendanceServices.getAttendanceById(id).then((response) => {
                setAttendance_Date(response.data.attendance_date);
                setAttendance_Status(response.data.attendance_status);
                setAttendance_Time(response.data.attendance_time);
                setEmployee_Id(response.data.employee.id); // Set employee id
            }).catch(error => {
                console.log(error);
            });
        }
    }, [id]);

    const saveOrUpdateAttendance = (e) => {
        e.preventDefault();

        const attendance = { attendance_date, attendance_status, attendance_time, employee:{id:employee_id} };

        if (id) {
            AttendanceServices.updateAttendance(id, attendance).then((response) => {
                navigate('/attendance');
            }).catch(error => {
                console.log(error);
            });
        } else {
            AttendanceServices.createAttendance(attendance).then((response) => {
                console.log(response.data);
                navigate('/attendance');
            }).catch(error => {
                console.log(error);
            });
        }
    };

    const title = () => {
        if (id) {
            return <h2 className="text-center">Update Attendance</h2>;
        } else {
            return <h2 className="text-center">Add Attendance</h2>;
        }
    };

    return (
        <div>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {title()}
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Attendance Date:</label>
                                    <input
                                        type="date"
                                        placeholder="Enter Attendance Date"
                                        className="form-control"
                                        value={attendance_date}
                                        onChange={(e) => setAttendance_Date(e.target.value)}
                                    />
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Attendance Status:</label>
                                    <input
                                        type="int"
                                        placeholder="Enter Attendance Status"
                                        className="form-control"
                                        value={attendance_status}
                                        onChange={(e) => setAttendance_Status(e.target.value)}
                                    />
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Attendance Time:</label>
                                    <input
                                        type="time"
                                        placeholder="Enter Attendance Time"
                                        className="form-control"
                                        value={attendance_time}
                                        onChange={(e) => setAttendance_Time(e.target.value)}
                                    />
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Employee:</label>
                                    <select
                                        className="form-control"
                                        value={employee_id}
                                        onChange={(e) => setEmployee_Id(e.target.value)}
                                    >
                                        <option value="">Select Employee</option>
                                        {employees.map(employee => (
                                            <option key={employee.id} value={employee.id}>
                                                {employee.first_name} {employee.last_name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                              

                                <button className="btn btn-success" onClick={(e) => saveOrUpdateAttendance(e)}>Submit</button>
                                <Link to="/attendance" className="btn btn-danger">Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAttendanceComponent;
