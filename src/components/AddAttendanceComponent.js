import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import AttendanceServices from '../services/AttendanceServices';

const AddAttendanceComponent = () => {
    const [attendance_date, setAttendance_Date] = useState('');
    const [attendance_status, setAttendance_Status] = useState('');
    const [attendance_time, setAttendance_Time] = useState('');
    const [employee_id, setEmployee_Id] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const saveOrUpdateAttendance = (e) => {
        e.preventDefault();

        const attendance = {
            attendance_date,
            attendance_status,
            attendance_time,
            employee_id
        };

        if (id) {
            AttendanceServices.updateAttendance(id, attendance)
                .then((response) => {
                    navigate('/attendance');
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            AttendanceServices.createAttendance(attendance)
                .then((response) => {
                    console.log(response.data);
                    navigate('/attendance');
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    useEffect(() => {
        AttendanceServices.getAttendanceById(id)
            .then((response) => {
                setAttendance_Date(response.data.attendance_date);
                setAttendance_Status(response.data.attendance_status);
                setAttendance_Time(response.data.attendance_time);
                setEmployee_Id(response.data.employee.id);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    const title = () => {
        if (id) {
            return <h2 className="text-center">Update Attendance</h2>;
        } else {
            return <h2 className="text-center">Add Attendance</h2>;
        }
    };

    return (
        <div>
            <br />
            <br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3">
                        {title()}
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Attendance Date :</label>
                                    <input
                                        type="date"
                                        placeholder="Enter Attendance Date"
                                        name="firstName"
                                        className="form-control"
                                        value={attendance_date}
                                        onChange={(e) => setAttendance_Date(e.target.value)}
                                    />
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Attendance Status :</label>
                                    <input
                                        type="number"
                                        placeholder="Enter Attendance Status"
                                        name="lastName"
                                        className="form-control"
                                        value={attendance_status}
                                        onChange={(e) => setAttendance_Status(e.target.value)}
                                    />
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label"> Attendance Time :</label>
                                    <input
                                        type="time"
                                        placeholder="Enter Attendance Time"
                                        name="lastName"
                                        className="form-control"
                                        value={attendance_time}
                                        onChange={(e) => setAttendance_Time(e.target.value)}
                                    />
                                </div>

                                <div className="form-group mb-2">
                                    <label className="form-label">Employee Id :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Employee Id"
                                        name="employeeId"
                                        className="form-control"
                                        value={employee_id}
                                        onChange={(e) => setEmployee_Id(e.target.value)}
                                    />
                                </div>

                                <button
                                    className="btn btn-success"
                                    onClick={(e) => saveOrUpdateAttendance(e)}
                                >
                                    Submit
                                </button>
                                <Link to="/attendance" className="btn btn-danger">
                                    Cancel
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAttendanceComponent;
