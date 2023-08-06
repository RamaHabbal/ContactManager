// import React from 'react';
import React, { useState , useEffect} from 'react';
import './styles.css'; 
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import ContactMap from './ContactMap';

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };
  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
      const response = await fetch('http://127.0.0.1:8000/api/getContacts');
      const data = await response.json();
      setContacts(data);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Contact Manager</h1>
      </header>
      <main>
        <div>
          <ContactForm  onAddContact={addContact} />
        </div>
        <div className="contact-list">
          <h2>Contact List</h2>
          <ContactList contacts={contacts} />
        </div>
        <div className="contact-map"> 
          <h2>Contact Map</h2>
          <ContactMap contacts={contacts} /> 
        </div>
      </main>
    </div>
  );
}

export default App;
