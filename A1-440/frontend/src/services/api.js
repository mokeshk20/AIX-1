const apiUrl = process.env.REACT_APP_API_URL || '/api'; // Fallback to /api if env var not set

const getCabSchedules = async () => {
  const response = await fetch(`${apiUrl}/cab-schedules`);
  if (!response.ok) {
    throw new Error(`Failed to fetch cab schedules: ${response.status}`);
  }
  return await response.json();
};

const bookCab = async (bookingDetails) => {
  const response = await fetch(`${apiUrl}/cab-booking`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(bookingDetails),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Cab booking failed');
  }
  return await response.json();
};


export default { apiUrl, getCabSchedules, bookCab };