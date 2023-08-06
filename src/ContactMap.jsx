import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const ContactMap = ({ contacts }) => {

        console.log(contacts);
  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {contacts.map(contact => (
        <Marker
          key={contact.id}
          position={[contact.latitude, contact.longitude]}
        >
          <Popup>
            <strong>{contact.name}</strong>
            <br />
            Phone: {contact.phone_number}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default ContactMap;
