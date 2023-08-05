import React from 'react';
import './styles.css'; 
import ContactList from './ContactList';
import ContactForm from './ContactForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Contact Manager</h1>
      </header>
      <main>
        <div className="contact-form">
          <h2>Add Contact</h2>
          <ContactForm />
        </div>
        <div className="contact-list">
          <h2>Contact List</h2>
          <ContactList />
        </div>
      </main>
    </div>
  );
}

export default App;
