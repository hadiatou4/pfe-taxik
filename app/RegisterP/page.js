import React from 'react'
import RegisterationForm from '../components/RegistrationForm';

const RegisterP = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl mb-4">Créer votre compte</h1>
        <RegisterationForm/>
      </div>
    </div>
  );
};

export default RegisterP;