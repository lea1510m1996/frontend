import React, { useState } from 'react';
import './Home.css';
import DatePicker from 'react-datepicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import "react-datepicker/dist/react-datepicker.css";

const Booknow = () => {
  const [date, setDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    makeupType: '',
    time: '',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.makeupType || !date || !formData.time) {
      alert('Please fill in all required fields.');
      return;
    }
    alert('Appointment booked successfully!');
  };

  return (
    <div className="booknow-container">
      <form className="booknow-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Makeup Appointment Form</h2>
        <p className="form-subtitle">Please fill the form below, it will only take 3 minutes</p>

        <div className="form-row">
          <input type="text" name="name" placeholder="Your Name" className="form-input" required onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" className="form-input" required onChange={handleChange} />
        </div>

        <div className="form-row">
          <input type="tel" name="phone" placeholder="Phone" className="form-input" required onChange={handleChange} />
          <select name="makeupType" className="form-input" required onChange={handleChange}>
            <option value="">Select Your Makeup Type</option>
            <option>Bridal</option>
            <option>Evening</option>
            <option>Casual</option>
            <option>Vintage</option>
            <option>Glamorous</option>
            <option>Character</option>
          </select>
        </div>

        <div className="form-row">
          <div className="calendar-wrapper">
            <input
              type="text"
              placeholder="Choose Your Date"
              value={date ? date.toLocaleDateString() : ''}
              readOnly
              className="form-input calendar-input"
              required
              onClick={() => setShowCalendar(!showCalendar)}
            />
            <FontAwesomeIcon
              icon={faCalendarAlt}
              className="calendar-icon"
              onClick={() => setShowCalendar(!showCalendar)}
            />
            {showCalendar && (
              <div className="calendar-popup">
                <DatePicker
                  selected={date}
                  onChange={(selectedDate) => {
                    setDate(selectedDate);
                    setShowCalendar(false);
                  }}
                  inline
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                />
              </div>
            )}
          </div>
          <select name="time" className="form-input" required onChange={handleChange}>
            <option value="">Choose Your Time</option>
            {Array.from({ length: 13 }, (_, i) => (
              <option key={i}>{8 + i}:00 {i < 4 ? 'AM' : 'PM'}</option>
            ))}
          </select>
        </div>

        <textarea
          name="notes"
          placeholder="Any Notes For Us"
          className="form-input notes-input"
          required
          onChange={handleChange}
        />

        <button type="submit" className="submit-button">
          Book Now
        </button>
      </form>
    </div>
  );
}

export default Booknow;
