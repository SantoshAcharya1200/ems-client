import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import ListAttendanceComponent from './components/ListAttendanceComponent'
import AddAttendanceComponent from './components/AddAttendanceComponent';


function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<ListEmployeeComponent />} />
            <Route path="/employees" element={<ListEmployeeComponent />} />
            <Route path="/add-employee" element={<AddEmployeeComponent />} />
            <Route path="/edit-employee/:id" element={<AddEmployeeComponent />} />
            <Route path="/attendance" element={<ListAttendanceComponent />} />
            <Route path="/add-attendance" element={<AddAttendanceComponent />} />

          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
