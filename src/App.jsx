import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

const services = [
  { name: 'Basic Grooming', description: 'Bath, brush, nail trim, and basic hygiene care.' },
  { name: 'Full Grooming', description: 'Complete grooming package with haircut and styling.' },
  { name: 'Pet Hotel', description: 'Comfortable short-stay accommodation for pets.' },
];

function Layout({ children }) {
  return (
    <div className="min-vh-100 bg-light">
      <nav className="navbar navbar-expand-lg bg-white border-bottom">
        <div className="container py-2">
          <Link className="navbar-brand fw-bold" to="/">HappyTails</Link>
          <div className="d-flex gap-3">
            <Link className="nav-link" to="/grooming">Services</Link>
            <Link className="btn btn-dark" to="/booking">Book Appointment</Link>
          </div>
        </div>
      </nav>
      {children}
      <footer className="border-top bg-white mt-5">
        <div className="container py-4 text-secondary small">
          HappyTails Pet Shop, Grooming & Cafe Services
        </div>
      </footer>
    </div>
  );
}

function Home() {
  return <Layout><section className="container py-5"><div className="row align-items-center g-4"><div className="col-lg-7"><p className="text-uppercase fw-semibold text-secondary">Pet services booking</p><h1 className="display-4 fw-bold">A clearer way to plan your pet's next visit.</h1><p className="lead text-secondary">Explore grooming options, select a service, choose a schedule, and review the appointment before confirming.</p><div className="d-flex gap-2"><Link className="btn btn-dark btn-lg" to="/booking">Start booking</Link><Link className="btn btn-outline-dark btn-lg" to="/grooming">View services</Link></div></div></div></section></Layout>;
}

function Grooming() {
  return <Layout><section className="container py-5"><h1 className="fw-bold mb-2">Services</h1><p className="text-secondary mb-4">Choose the service that best fits your pet.</p><div className="row g-3">{services.map((service) => <div className="col-md-4" key={service.name}><div className="card h-100 shadow-sm border-0"><div className="card-body p-4"><h2 className="h5">{service.name}</h2><p className="text-secondary">{service.description}</p></div></div></div>)}</div></section></Layout>;
}

function Step({ number, title, children, next, nextLabel = 'Continue' }) {
  return <Layout><section className="container py-5" style={{ maxWidth: 760 }}><p className="text-secondary">Step {number} of 4</p><h1 className="fw-bold">{title}</h1><div className="card border-0 shadow-sm mt-4"><div className="card-body p-4">{children}</div></div><div className="d-flex justify-content-end mt-4"><Link className="btn btn-dark" to={next}>{nextLabel}</Link></div></section></Layout>;
}

function BookAppointment() {
  return <Step number="1" title="Tell us about your pet" next="/choose-service"><div className="row g-3"><div className="col-md-6"><label className="form-label">Pet name</label><input className="form-control" placeholder="e.g. Mochi" /></div><div className="col-md-6"><label className="form-label">Pet type</label><select className="form-select"><option>Dog</option><option>Cat</option></select></div></div></Step>;
}

function ChooseService() {
  return <Step number="2" title="Choose a service" next="/schedule"><div className="list-group">{services.map((service) => <label className="list-group-item d-flex gap-3" key={service.name}><input type="radio" name="service" className="form-check-input mt-1" /><span><strong>{service.name}</strong><br /><span className="text-secondary">{service.description}</span></span></label>)}</div></Step>;
}

function ScheduleAppointment() {
  return <Step number="3" title="Select a schedule" next="/confirmation"><div className="row g-3"><div className="col-md-6"><label className="form-label">Preferred date</label><input type="date" className="form-control" /></div><div className="col-md-6"><label className="form-label">Preferred time</label><input type="time" className="form-control" /></div></div></Step>;
}

function BookingConfirmation() {
  return <Step number="4" title="Review your appointment" next="/appointment-confirmed" nextLabel="Confirm appointment"><dl className="row mb-0"><dt className="col-sm-4">Pet</dt><dd className="col-sm-8">Your selected pet</dd><dt className="col-sm-4">Service</dt><dd className="col-sm-8">Selected grooming service</dd><dt className="col-sm-4">Schedule</dt><dd className="col-sm-8">Selected date and time</dd></dl></Step>;
}

function AppointmentConfirmed() {
  return <Layout><section className="container py-5 text-center" style={{ maxWidth: 680 }}><div className="bg-white shadow-sm rounded-4 p-5"><div className="display-5 mb-3">✓</div><h1 className="fw-bold">Appointment confirmed</h1><p className="text-secondary">The booking workflow is complete. In the full system, appointment data can be connected to backend services and staff operations.</p><Link className="btn btn-dark" to="/">Return home</Link></div></section></Layout>;
}

export default function App() {
  return <BrowserRouter><Routes><Route path="/" element={<Home />} /><Route path="/grooming" element={<Grooming />} /><Route path="/booking" element={<BookAppointment />} /><Route path="/choose-service" element={<ChooseService />} /><Route path="/schedule" element={<ScheduleAppointment />} /><Route path="/confirmation" element={<BookingConfirmation />} /><Route path="/appointment-confirmed" element={<AppointmentConfirmed />} /></Routes></BrowserRouter>;
}
