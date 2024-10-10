import React, { useState, useEffect } from 'react';
import { getEventById, getEventsByLocationId } from '../services/EventsAPI';
import { useParams } from 'react-router-dom';

const Event = () => {
    const { id, locationId } = useParams();
    const [event, setEvent] = useState(null);
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEventData = async () => {
            try {
                setLoading(true);
                setError(null);

                if (id) {
                    const eventData = await getEventById(id);
                    setEvent(eventData);
                } else if (locationId) {
                    const eventsData = await getEventsByLocationId(locationId);
                    setEvents(eventsData);
                }

            } catch (err) {
                setError('Error fetching event(s).');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchEventData();
    }, [id, locationId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="event-page">
            {event && (
                <div className="event-details">
                    <h1>{event.name}</h1>
                    <p>Date: {event.date}</p>
                    <p>Description: {event.description}</p>
                </div>
            )}

            {events.length > 0 && (
                <div className="events-list">
                    <h1>Events at Location {locationId}</h1>
                    <ul>
                        {events.map((ev) => (
                            <li key={ev.id}>
                                <h2>{ev.name}</h2>
                                <p>Description: {ev.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* No events found */}
            {events.length === 0 && !event && (
                <div>No events found for this location.</div>
            )}
        </div>
    );
};

export default Event;
