import React, { useState, useEffect } from 'react';
import api from '../../services/api';

function BookingHistory() {
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchBookings = async () => {
      setIsLoading(true);
      try {
        const bookingsData = await api.getBookings(); // Assuming api.getBookings exists
        setBookings(bookingsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBookings();
  }, []);

  // ... rest of the component ...
  return (
    <div>
      {/* ... JSX to display booking history ... */}
      {isLoading && <p>Loading booking history...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default BookingHistory;