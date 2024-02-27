import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom';
 import EmployeeService from '../services/EmployeeServices'

const AddEmployeeComponent = () => {

    const [first_name, setFirst_Name] = useState('')
    const [middle_name, setMiddle_Name] = useState('')
    const [last_name, setLast_Name] = useState('')
    const [gender, setGender] = useState('')
    const [age, setAge] = useState('')
    const [address, setAddress] = useState('')
    const [contact_details, setContact_details] = useState('')
    const navigate = useNavigate()
    const {id} = useParams();

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();

        if (!first_name || !last_name || !gender || !age) {
            alert('Please fill in all required fields.');
            return;
        }

        const employee = {first_name,middle_name,last_name,gender,age,address,contact_details}

        if(id){
            EmployeeService.updateEmployee(id, employee).then((response) => {
                navigate('/employees')
            }).catch(error => {
                console.log(error)
            })

        }else{
            EmployeeService.createEmployee(employee).then((response) =>{

                console.log(response.data)
    
                navigate('/employees');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

        EmployeeService.getEmployeeById(id).then((response) =>{
            setFirst_Name(response.data.first_name)
            setMiddle_Name(response.data.middle_name)
            setLast_Name(response.data.last_name)
            setGender(response.data.gender)
            setAge(response.data.age)
            setAddress(response.data.address)
            setContact_details(response.data.contact_details)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Employee</h2>
        }else{
            return <h2 className = "text-center">Add Employee</h2>
        }
    }

    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           title()
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> First Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter first name"
                                        name = "firstName"
                                        className = "form-control"
                                        value = {first_name}
                                        onChange = {(e) => setFirst_Name(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Middle Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter last name"
                                        name = "lastName"
                                        className = "form-control"
                                        value = {middle_name}
                                        onChange = {(e) => setMiddle_Name(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Last Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter last name"
                                        name = "lastName"
                                        className = "form-control"
                                        value = {last_name}
                                        onChange = {(e) => setLast_Name(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Gender :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter gender"
                                        name = "emailId"
                                        className = "form-control"
                                        value = {gender}
                                        onChange = {(e) => setGender(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Age :</label>
                                    <input
                                        type = "int"
                                        placeholder = "Enter age"
                                        name = "lastName"
                                        className = "form-control"
                                        value = {age}
                                        onChange = {(e) => setAge(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Address :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter address"
                                        name = "lastName"
                                        className = "form-control"
                                        value = {address}
                                        onChange = {(e) => setAddress(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Contact details :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter contact details"
                                        name = "lastName"
                                        className = "form-control"
                                        value = {contact_details}
                                        onChange = {(e) => setContact_details(e.target.value)}
                                    >
                                    </input>
                                </div>



                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateEmployee(e)} >Submit </button>
                                <Link to="/employees" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AddEmployeeComponent