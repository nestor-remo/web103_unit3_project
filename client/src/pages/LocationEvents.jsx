import React, { useState, useEffect } from 'react';
import { getLocationById } from '../services/LocationsAPI'; // Assuming you have this API function
import { getEventsByLocationId } from '../services/EventsAPI'; // Assuming you have this API function
import Event from '../components/Event';
import '../css/LocationEvents.css';

const LocationEvents = ({ index }) => {
  const [location, setLocation] = useState({});
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchLocationAndEvents = async () => {
      try {
        setLoading(true); // Start loading
        // Fetch location details
        const locationData = await getLocationById(index);
        setLocation(locationData);

        // Fetch events for the location
        const eventsData = await getEventsByLocationId(index);
        setEvents(eventsData);
      } catch (err) {
        setError('Failed to load location or events.');
        console.error(err);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchLocationAndEvents();
  }, [index]);

  // Render loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render error state
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="location-events">
      <header>
        <div className="location-image">
          {location.image && <img src={location.image} alt={location.name} />}
        </div>

        <div className="location-info">
          <h2>{location.name}</h2>
          <p>
            {location.address}, {location.city}, {location.state} {location.zip}
          </p>
        </div>
      </header>

      <main>
        {events && events.length > 0 ? (
          events.map((event) => (
            <Event
              key={event.id}
              id={event.id}
              title={event.title}
              date={event.date}
              time={event.time}
              image={event.image}
            />
          ))
        ) : (
          <h2>
            <i className="fa-regular fa-calendar-xmark fa-shake"></i> No events
            scheduled at this location yet!
          </h2>
        )}
      </main>
    </div>
  );
};

export default LocationEvents;
