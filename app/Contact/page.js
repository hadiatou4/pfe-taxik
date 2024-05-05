'use client'
import HeaderHome from '../components/HeaderHome'
import Footer from '../components/Footer'
import { FaPhone } from 'react-icons/fa';
import React, { useState } from 'react';
import { db } from '../firebase.config';
import { collection, addDoc } from 'firebase/firestore';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  async function fire(name, email, subject, message) {
    try {
      const docRef = await addDoc(collection(db, 'Messages'), {
        name: name,
        email: email,
        subject: subject,
        message: message,
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
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const added = await fire(name, email, subject, message);
    if (added) {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      alert('Data added successfully');
    } else {
      alert('Error adding data');
    }
  };

  return (
    <div>
      <HeaderHome/>
      <div className="relative mx-0 px-4 py-80 h-[calc(100vh - 12rem)] rounded-[4rem] overflow-hidden bg-cover bg-center"
       style={{backgroundImage: "url('/contact.jpeg')"}}>
         <div className='absolute bg-slate-900 inset-0 w-full h-full opacity-30 z-20'>
        <div className="container px-7 justify-end items-start">
          <h1 className="text-6xl text-white font-extrabold py-8 mt-[30rem]">Contactez-nous</h1>
        </div>
      </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Nous sommes là pour vous aider</h1>
        <p className="text-3xl leading-snug italic font-semibold text-gray-600 mb-8">
          Chez Taxik, nous sommes engagés à vous offrir un service de qualité exceptionnelle. Votre satisfaction est notre priorité absolue, c'est pourquoi nous prenons chaque commentaire, préoccupation et suggestion au sérieux. Votre avis compte énormément pour nous, car il nous aide à améliorer continuellement notre application pour mieux répondre à vos besoins.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4" >
          <fieldset className="border border-gray-200 p-6 rounded">
            <legend className="text-xl font-semibold mb-4">Formulaire de contact</legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-2">Nom</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Entrez votre nom"
                  className="input"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Entrez votre email"
                  className="input"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-lg font-semibold text-gray-700 mb-2">Sujet</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Entrez le sujet de votre message"
                className="input"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-semibold text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Entrez votre message"
                rows="10"
                cols="50"
                className="input"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-full bg-gray-200 text-gray-500 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-200">Envoyer</button>
          </fieldset>
        </form>
      </div>
      <div className="container mx-auto flex justify-end items-center px-4 py-8">
        <p className="text-lg mr-2">Besoin d'aide ? Appelez notre centre d'aide : </p>
        <a href="tel:0522505150" className="flex items-center text-lg text-blue-500">
          <FaPhone className="mr-2" /> 0522505150
        </a>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
