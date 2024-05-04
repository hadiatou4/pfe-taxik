'use client'
import React ,{ useState } from 'react';
import { auth, firestore } from '../firebase.config';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

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

    try {
      const { user } = await auth.createUserWithEmailAndPassword(formData.email, formData.password);

      await firestore.collection('users').doc(user.uid).set({
        firstName: formData.firstName,
        lastName: formData.lastName,
        dateOfBirth: formData.dateOfBirth,
        email: formData.email
      });

      alert("Inscription réussie !");
    } catch (error) {
      alert(error.message);
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
