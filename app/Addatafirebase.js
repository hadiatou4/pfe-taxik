'use client'
import { db } from './firebase.config';
import { collection, addDoc } from 'firebase/firestore';
import React, { useState } from 'react';

async function fire(name, email, message) {
  try {
    const docRef = await addDoc(collection(db, 'messages'), {
      name: name,
      email: email,
      message: message,
    });
    console.log('Document written with Id', docRef.id);
    return true;
  } catch (error) {
    console.error('Error adding document', error);
    return false;
  }
}
function Addatafirebase() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const added = await fire(name, email, message);
      if (added) {
        setName('');
        setEmail('');
        setMessage('');
        alert('Data added');
      }
    };
  
    return (
      <div>
        <h1>Firestore</h1>
        <form onSubmit={handleSubmit}>
          Entrez le nom :
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          <br />
          Entrez l'email :
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <br />
          Entrez le message :
          <textarea rows={5} id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
          <br />
          <button type="submit">Envoyer</button>
        </form>
      </div>
    );
}

export default Addatafirebase
