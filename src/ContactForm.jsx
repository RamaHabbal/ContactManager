import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
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
        Authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNjkxMjc1Mjc1LCJleHAiOjE2OTEyNzg4NzUsIm5iZiI6MTY5MTI3NTI3NSwianRpIjoiRVJTaThETzFQVVF3OVVkayIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.NOX6NQrt2mmfo5V9FwbC_VMQryMvSxqu6_R83Sup3r8",
      },
      
      body: JSON.stringify({
        name,
        phone_number: phoneNumber,
        latitude,
        longitude,
      }),
  
    });
    setName("");
    setPhoneNumber("");
    setLatitude("");
    setLongitude("");
    const responseData = await response.json();
    // console.log(responseData.Authorization);

    // console.log(responseData);

    if (responseData.ok) {
      // Contact added successfully, perform necessary actions
    } else {
      console.error("Error adding contact:", responseData);
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
