import React, { useState, useEffect } from 'react';
import ContactCard from './ContactCard';


const ContactList = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/getContacts');
        const data = await response.json();
        setContacts(data);
    };

    return (
        <div className="contact-list">
            {contacts.map(contact => (
                <ContactCard key={contact.id} contact={contact} />
            ))}
        </div>
    );
};

export default ContactList;

