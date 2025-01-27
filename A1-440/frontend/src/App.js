import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import RegistrationForm from './components/Registration/RegistrationForm';
import LoginForm from './components/Login/LoginForm';
import PasswordResetRequestForm from './components/PasswordReset/PasswordResetRequestForm';
import PasswordResetUpdateForm from './components/PasswordReset/PasswordResetUpdateForm';
import CabBooking from './components/CabBooking/CabBooking';
import BookingHistory from './components/CabBooking/BookingHistory';
import AdminUserManagement from './components/Admin/AdminUserManagement';


function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/register">Register</Link> |
        <Link to="/login">Login</Link> |
        <Link to="/password-reset">Password Reset</Link> |
        <Link to="/cab-booking">Cab Booking</Link> |
        <Link to="/booking-history">Booking History</Link> |
        <Link to="/admin">Admin</Link> 
      </nav>

      <Routes>
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/password-reset" element={<PasswordResetRequestForm />} />
        <Route path="/password-reset/:token" element={<PasswordResetUpdateForm />} />
        <Route path="/cab-booking" element={<CabBooking />} />
        <Route path="/booking-history" element={<BookingHistory />} />
        <Route path="/admin" element={<AdminUserManagement />} />
      </Routes>
    </div>
  );
}

export default App;