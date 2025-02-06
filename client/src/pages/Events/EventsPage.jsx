import React, { useState } from 'react';
import Event from './components/Event';
import eventsData from './events-data.json';
import './EventsPage.css';

function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const closeDetails = () => {
    setSelectedEvent(null);
  };

  return (
    <div className='EventsPage page' id='EventsPage'>
      <h1>Events we organise</h1>
      <div className='EventContainer'>
        {eventsData.map((event, index) => (
          <Event 
              key={index} // Add a key prop for better performance
              name={event.name} 
              shortDescription={event.shortDescription} // Pass shortDescription as a prop
              description={event.description} // Keep the full description for details
              photo={require(`../../assets/events/${event.photoName}`)} 
          />
        ))}
      </div>

      {selectedEvent && (
        <div className='EventDetails'>
          <div className='EventDetailsContent'>
            <h2>{selectedEvent.name}</h2>
            <p>{selectedEvent.description}</p>
            <button onClick={closeDetails}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EventsPage;