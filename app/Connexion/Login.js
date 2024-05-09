'use client'
import React, { useState } from 'react';
import { CgSpinner } from 'react-icons/cg';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';
import { collection, get, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase.config';

function Login() {
  const [ email , setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [userDocsFound, setUserDocsFound] = useState(false); // Added state to track if user documents are found

  async function handleLogin() {
    setLoading(true);
    try {
      // Retrieve user information from Firestore
      const PassagersRef= await getDoc;
      if (!userDoc.empty) {
        // User documents found in the database
        setUserDocsFound(true); // Set state to true to display the message
        const userData = userDoc.docs[0].data();
        if (userData.password === password) {
          toast.success('Connexion réussie !');

          // Redirect to the profile page
          window.location.href = '/ProfileUser';
        } else {
          toast.error('Mot de passe incorrect. Veuillez réessayer.');
        }
      } else {
        toast.error('Utilisateur non trouvé. Veuillez vérifier votre email.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      toast.error('Erreur de connexion ! Veuillez réessayer.');
    }
    setLoading(false);
  }
  return (
    <section className='bg-black flex items-center justify-center h-screen'>
      <div className='bg-white w-50 pl-20 pr-20 rounded-lg text-center '>
        <Toaster toasOptions={{ duration: 4000 }} />
        <div className='w-full font-bold flex flex-col gap-4 rounded-lg p-4'>
          <h1 className='text-center leading-normal text-black font-medium text-3xl mb-6'>
            Connexion à TAXIK
          </h1>
          <div className=''>
            <label htmlFor='email' className='font-bold text-2xl text- text-center'>
              Email
            </label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='border rounded-lg px-4 py-2 mt-2'
            />
          </div>
          <div className=''>
            <label htmlFor='password' className='font-bold text-2xl text- text-center'>
              Mot de passe
            </label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='border rounded-lg px-4 py-2 mt-2'
            />
          </div>
          <button
            onClick={handleLogin}
            disabled={loading}
            className='bg-gray-300 hover:bg-gray-400 w-full flex gap-1 items-center justify-center py-2.5 text-gray-600 rounded'
          >
            {loading && <CgSpinner size={20} className='mt-1 animate-spin' />}
            <span>Se connecter</span>
          </button>
          {/* Display message when user documents are found */}
          {userDocsFound && <p className='text-green-500'>Utilisateur trouvé !</p>}
          <p className='text-center mt-4'>
            Vous n'avez pas de compte ?{' '}
            {/* <Link href='/inscription'>
              <a className='text-blue-700'>Inscrivez-vous</a>
            </Link>*/}
          </p>
        </div>
      </div>
    </section>
  );
}
export default Login;