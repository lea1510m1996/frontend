import React, { useState } from 'react';
import './Home.css';
import DatePicker from 'react-datepicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import "react-datepicker/dist/react-datepicker.css";

const Booknow = () => {
  const [date, setDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <div className="booknow-container">
      <form className="booknow-form">
        <h2 className="form-title">Makeup Appointment Form</h2>
        <p className="form-subtitle">
          Please fill the form below, it will only take 3 minutes
        </p>

        <div className="form-row">
          <input type="text" placeholder="Your Name" className="form-input" />
          <input type="email" placeholder="Email" className="form-input" />
        </div>

        <div className="form-row">
          <input type="tel" placeholder="Phone" className="form-input" />
          <select className="form-input">
            <option>Select Your Makeup Type</option>
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
                  onChange={(date) => {
                    setDate(date);
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

          <select className="form-input">
            <option>Choose Your Time</option>
            {Array.from({ length: 13 }, (_, i) => (
              <option key={i}>{8 + i}:00 {i < 4 ? 'AM' : 'PM'}</option>
            ))}
          </select>
        </div>

        <textarea
          placeholder="Any Notes For Us"
          className="form-input notes-input"
        />

        <button type="submit" className="submit-button">
          Book Now
        </button>
      </form>
    </div>
  );
}

export default Booknow;

