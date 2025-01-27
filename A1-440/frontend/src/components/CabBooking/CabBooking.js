import React, { useState, useEffect } from 'react';
import api from '../../services/api';

function CabBooking() {
  const [cabSchedules, setCabSchedules] = useState([]);
  const [selectedCab, setSelectedCab] = useState(null);
  const [bookingDetails, setBookingDetails] = useState({});
  const [bookingConfirmation, setBookingConfirmation] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCabSchedules = async () => {
      setIsLoading(true);
      try {
        const schedules = await api.getCabSchedules();
        setCabSchedules(schedules);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCabSchedules();
  }, []);

  const handleBooking = async () => {
    setIsLoading(true);
    try {
      const confirmation = await api.bookCab(bookingDetails);
      setBookingConfirmation(confirmation);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // ... rest of the component ...
  return (
    <div>
      {/* ... JSX to display cab schedules and booking form ... */}
      <button onClick={handleBooking} disabled={isLoading}>
        {isLoading ? 'Booking...' : 'Book Cab'}
      </button>
      {bookingConfirmation && <p>{bookingConfirmation}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default CabBooking;