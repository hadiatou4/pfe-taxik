'use client'
import React ,{ useState } from 'react';
import { auth, db } from '../firebase.config';
import { collection, addDoc } from 'firebase/firestore';

const RegistrationForm = ({ uid, phoneNumber }) => {
  const [formData, setFormData] = useState({
    phonenumber: phoneNumber, // Stocker le numéro de téléphone dans le state
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  async function fire(lastName, firstName, dateN, email, password, phonenumber) {
    try {
      const docRef = await addDoc(collection(db, 'Passagers'), {
        ID: uid, // Stocker l'UID ici
        Numero: phonenumber,
        Prenom: firstName,
        nom: lastName,
        dateN: dateN,
        email: email,
        motDePass: password,
      });
      console.log('Document written with Id', docRef.id);
      return true;
    } catch (error) {
      console.error('Error adding document', error);
      return false;
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }
    const { firstName, lastName, dateOfBirth, email, password, phonenumber } = formData;
    const added = await fire(firstName, lastName, dateOfBirth, email, password, phonenumber);
    if (added) {
      setFormData({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        email: '',
        password:'',
      });
      alert('Data added successfully');
    } else {
      alert('Error adding data');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mx-auto bg-black p-8 mt-8 rounded shadow-lg">
      <h2 className="text-2xl text-white font-semibold mb-4">Création de votre compte </h2>
      <input type="text" name="firstName" placeholder="Prénom" value={formData.firstName} onChange={handleChange} required className="block w-full px-4 py-2 mb-2 border rounded-md focus:outline-none focus:border-blue-400" />
      <input type="text" name="lastName" placeholder="Nom" value={formData.lastName} onChange={handleChange} required className="block w-full px-4 py-2 mb-2 border rounded-md focus:outline-none focus:border-blue-400" />
      <input type="date" name="dateOfBirth" placeholder="Date de naissance" value={formData.dateOfBirth} onChange={handleChange} required className="block w-full px-4 py-2 mb-2 border rounded-md focus:outline-none focus:border-blue-400" />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="block w-full px-4 py-2 mb-2 border rounded-md focus:outline-none focus:border-blue-400" />
      <input type="password" name="password" placeholder="Mot de passe" value={formData.password} onChange={handleChange} required className="block w-full px-4 py-2 mb-2 border rounded-md focus:outline-none focus:border-blue-400" />
      <input type="password" name="confirmPassword" placeholder="Répéter le mot de passe" value={formData.confirmPassword} onChange={handleChange} required className="block w-full px-4 py-2 mb-2 border rounded-md focus:outline-none focus:border-blue-400" />
      <button type="submit" className="w-full bg-gray-200 text-gray-500 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-200">S'inscrire</button>
    </form>
  );
};

export default RegistrationForm;
