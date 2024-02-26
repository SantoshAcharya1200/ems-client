import axios from 'axios';

const ATTENDANCE_BASE_REST_API_URL = 'http://localhost:8080/api/v1/attendance'; 

class AttendanceServices {
    getAllAttendance() {
        return axios.get(ATTENDANCE_BASE_REST_API_URL);
    }

    createAttendance(attendance) {
        return axios.post(ATTENDANCE_BASE_REST_API_URL, attendance);
    }

    getAttendanceById(attendanceId) {
        return axios.get(`${ATTENDANCE_BASE_REST_API_URL}/${attendanceId}`);
    }

    updateAttendance(attendanceId, attendance) {
        return axios.put(`${ATTENDANCE_BASE_REST_API_URL}/${attendanceId}`, attendance);
    }
}

export default new AttendanceServices();
