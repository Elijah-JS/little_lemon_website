import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import './Reservations.css'; // Ensure this CSS file exists and is correctly styled
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import default styling for react-datepicker

const Reservations = () => {
  const [showOccasionMenu, setShowOccasionMenu] = useState(false);
  const [showTimeMenu, setShowTimeMenu] = useState(false);
  const [showDinerMenu, setShowDinerMenu] = useState(false);
  const [selectedOccasion, setSelectedOccasion] = useState('Occasion');
  const [selectedTime, setSelectedTime] = useState('Time');
  const [selectedDiner, setSelectedDiner] = useState('No. of Diners');
  const [selectedDate, setSelectedDate] = useState(null);
  const [location, setLocation] = useState('');

  const occasionRef = useRef(null);
  const timeRef = useRef(null);
  const dinerRef = useRef(null);

  // Toggle dropdown visibility
  const toggleOccasionMenu = () => setShowOccasionMenu((prev) => !prev);
  const toggleTimeMenu = () => setShowTimeMenu((prev) => !prev);
  const toggleDinerMenu = () => setShowDinerMenu((prev) => !prev);

  // Handle click outside to close dropdown
  const handleClickOutside = (event) => {
    if (occasionRef.current && !occasionRef.current.contains(event.target)) {
      setShowOccasionMenu(false);
    }
    if (timeRef.current && !timeRef.current.contains(event.target)) {
      setShowTimeMenu(false);
    }
    if (dinerRef.current && !dinerRef.current.contains(event.target)) {
      setShowDinerMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle option selection
  const handleOccasionSelect = (option) => {
    setSelectedOccasion(option);
    setShowOccasionMenu(false);
  };

  const handleTimeSelect = (option) => {
    setSelectedTime(option);
    setShowTimeMenu(false);
  };

  const handleDinerSelect = (option) => {
    setSelectedDiner(option);
    setShowDinerMenu(false);
  };

  return (
    <>
      <Helmet>
        <title>Reservations | Little Lemon Restaurant</title>
        <meta name="description" content="Make a reservation at Little Lemon Restaurant. Ensure your table is ready for an unforgettable dining experience." />
        <meta name="keywords" content="reservations, Little Lemon, book a table, dining, restaurant reservations" />
        <meta property="og:title" content="Reservations | Little Lemon Restaurant" />
        <meta property="og:description" content="Make a reservation at Little Lemon Restaurant. Ensure your table is ready for an unforgettable dining experience." />
        <meta property="og:image" content="/assetsp/logo.svg" />
        <meta property="og:url" content="http://www.littlelemon.com/reservations" />
      </Helmet>
      {/* Page content starts here */}
      <div className="reservation-page">
        <div className="top-box">
          <div className="titlel&seating-choice">
            <p>Reservations</p>
            <div className="form-field radio-buttons">
              <label className="radiobutton">
                <h3>Indoor seating</h3>
                <input
                  type="radio"
                  name="seating"
                  value="indoor"
                  checked={location === 'indoor'}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </label>
              <label className="radiobutton">
                <h3>Outdoor seating</h3>
                <input
                  type="radio"
                  name="seating"
                  value="outdoor"
                  checked={location === 'outdoor'}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </label>
            </div>
          </div>

          {/* Dropdown menus section */}
          <div className="top-row-dropdown">
            {/* Right side */}
            <div className="date-picker-container">
              <h3>Select a Date</h3>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="yyyy/MM/dd"
                placeholderText="Click to select a date"
              />
            </div>

            {/* Left side */}
            <div className="menu-container" ref={dinerRef}>
              <h3>Number of Diners</h3>
              <button className="dropdown-button" onClick={toggleDinerMenu}>
                {selectedDiner}
              </button>
              {showDinerMenu && (
                <div className='dinermenus'>
                <ul className="dinermenu1">
                  <li><a href="#" onClick={() => handleDinerSelect('1 Diner')}>1 Diner</a></li>
                  <li><a href="#" onClick={() => handleDinerSelect('3 Diners')}>3 Diners</a></li>
                  <li><a href="#" onClick={() => handleDinerSelect('5 Diners')}>5 Diners</a></li>
                  <li><a href="#" onClick={() => handleDinerSelect('7 Diners')}>7 Diners</a></li>
                  <li><a href="#" onClick={() => handleDinerSelect('9 Diners')}>7 Diners</a></li>
                </ul>

                <ul className="diner-menu2">
                  <li><a href="#" onClick={() => handleDinerSelect('2 Diners')}>2 Diners</a></li>
                  <li><a href="#" onClick={() => handleDinerSelect('4 Diners')}>4 Diners</a></li>
                  <li><a href="#" onClick={() => handleDinerSelect('6 Diners')}>6 Diners</a></li>
                  <li><a href="#" onClick={() => handleDinerSelect('8 Diners')}>8 Diners</a></li>
                  <li><a href="#" onClick={() => handleDinerSelect('10 Diners')}>10 Diners</a></li>
                </ul>

                </div>
              )}
            </div>
          </div>

          <div className="bottom-row-dropdown">
            <div className="menu-container" ref={occasionRef}>
              <h3>Occasion</h3>
              <button className="dropdown-button" onClick={toggleOccasionMenu}>
                {selectedOccasion}
              </button>
              {showOccasionMenu && (
                <ul className="dropdown-menu">
                  <li><a href="#" onClick={() => handleOccasionSelect('Birthday')}>Birthday</a></li>
                  <li><a href="#" onClick={() => handleOccasionSelect('Engagement')}>Engagement</a></li>
                  <li><a href="#" onClick={() => handleOccasionSelect('Anniversary')}>Anniversary</a></li>
                </ul>
              )}
            </div>

            <div className="menu-container" ref={timeRef}>
              <h3>Time</h3>
              <button className="dropdown-button" onClick={toggleTimeMenu}>
                {selectedTime}
              </button>
              {showTimeMenu && (
                <div className='timemenus'>
                <ul className="timemenu1">
                  <li><a href="#" onClick={() => handleTimeSelect('5pm')}>5pm</a></li>
                  <li><a href="#" onClick={() => handleTimeSelect('7pm')}>7pm</a></li>
                  <li><a href="#" onClick={() => handleTimeSelect('9pm')}>9pm</a></li>
                </ul>

                <ul className='timemenu2'>
                  <li><a href="#" onClick={() => handleTimeSelect('6pm')}>6pm</a></li>
                  <li><a href="#" onClick={() => handleTimeSelect('8pm')}>8pm</a></li>
                  <li><a href="#" onClick={() => handleTimeSelect('10pm')}>10pm</a></li>
                </ul>
                </div>

              )}
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="image-row">
            <img src="/path/to/image1.jpg" alt="Image 1" />
            <img src="/path/to/image2.jpg" alt="Image 2" />
            <img src="/path/to/image3.jpg" alt="Image 3" />
          </div>
          <div className="reserve-button-section">
            <button className="reserve-button">Reserve a table</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservations;

