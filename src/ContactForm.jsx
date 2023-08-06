import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
    const response = await fetch("http://127.0.0.1:8000/api/createContact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      
      body: JSON.stringify({
        name,
        phone_number: phoneNumber,
        latitude,
        longitude,
      }),
  
    });


    if (response.ok) {
      const newContact = await response.json();
      console.log(newContact);
      onAddContact(newContact);
      setName("");
      setPhoneNumber("");
      setLatitude("");
      setLongitude("");
     
      console.log("Contact created successfully");
    } else {
      console.error("Error adding contact:", response.status);
    }
 
  }catch (error) {
    console.error("Fetch error:", error);
  }
  };

  return (
    <div className="contact-form">
      <h2>Add Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="latitude">Latitude:</label>
          <input
            type="number"
            step="any"
            id="latitude"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="longitude">Longitude:</label>
          <input
            type="number"
            step="any"
            id="longitude"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default ContactForm;
