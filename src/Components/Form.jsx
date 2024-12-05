import React from "react";
import { useState } from "react";
import CardContact from "./CardContact";
import '../styles/Form.css'

const Form = () => {
  // Aqui deberan implementar el form completo con sus validaciones

  const [contact, setContact] = useState({
    fullname: "",
    email: ""
  });

  const [submittedContact, setSubmittedContact] = useState(null);
  const [showCard, setShowcard] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    let regExGlobal = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (contact.fullname.trim().length < 5 || (!regExGlobal.test(contact.email))) {
      setError('Please enter a valid email address or valid fullname');
      setShowcard(false);
      console.log('Error');
    } else {
      setError('');
      setShowcard(true);
      setSubmittedContact(contact); 
      alert('Your contact information has been submitted successfully.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter your fullname!</label>
        <input type="text" onChange={(event) => setContact({ ...contact, fullname: event.target.value })} />
        <label>Enter your email so we can contact you!</label>
        <input type="email" onChange={(event) => setContact({ ...contact, email: event.target.value })} />
        <button>Send</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {showCard ? <CardContact fullname={submittedContact.fullname} email={submittedContact.email} /> : null}
    </div>
  );
};

export default Form;
