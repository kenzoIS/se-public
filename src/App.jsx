import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HappyTailsNavbar from './components/HappyTailsNavbar';
import Grooming from './pages/Grooming';
import Home from './pages/Home';
import BookAppointment from './pages/BookAppointment';
import ChooseService from './pages/ChooseService';
import ScheduleAppointment from './pages/ScheduleAppointment';
import BookingConfirmation from './pages/BookingConfirmation';
import AppointmentConfirmed from './pages/AppointmentConfirmed';
import './App.css';

const NavbarWrapper = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  if (isHomePage) {
    return null;
  }

  return <HappyTailsNavbar />;
};

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarWrapper />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/grooming" element={<Grooming />} />
            <Route path="/booking" element={<BookAppointment />} />
            <Route path="/choose-service" element={<ChooseService />} />
            <Route path="/schedule" element={<ScheduleAppointment />} />
            <Route path="/confirmation" element={<BookingConfirmation />} />
            <Route path="/appointment-confirmed" element={<AppointmentConfirmed />} />
          </Routes>
        </main>

        <footer className="happy-tails-footer">
          <div className="container">
            <p>© {new Date().getFullYear()} HappyTails. All rights reserved.</p>
            <p>Pet Shop, Grooming & Cafe Services</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
