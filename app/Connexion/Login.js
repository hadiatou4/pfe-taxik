'use client'
import React, { useState } from 'react';
import { CgSpinner } from 'react-icons/cg';
import { useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';
import { db } from '../firebase.config'; // Importez uniquement la base de données Firestore
import { collection, query, where, getDocs } from "firebase/firestore";
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleLogin() {
    setLoading(true);
    try {
      const userRef = query( collection(db,'Passagers'), where('email', '==', email), where('motDePass', '==', password));
      const querysnapshot = await getDocs(userRef);
      console.log(userRef)
      if (!querysnapshot.empty) {
        // Utilisateur trouvé
        toast.success('Connexion réussie !');

        // Redirection vers la page de profil ou toute autre page appropriée
        router.push('/ProfileUser');
      } else {
        // Utilisateur non trouvé ou mot de passe incorrect
        toast.error("L'utilisateur n'existe pas ou le mot de passe est incorrect.");
      }
    } catch (error) {
      console.error('Error logging in:', error);
      toast.error('Erreur de connexion ! Veuillez réessayer.');
    }
    setLoading(false);
  }

  return (
    <section className='bg-black flex items-center justify-center h-screen'>
      <div className='bg-white w-50 pl-20 pr-20 rounded-lg text-center'>
        <Toaster toastOptions={{ duration: 4000 }} />
        <div className='w-full font-bold flex flex-col gap-4 rounded-lg p-4'>
          <h1 className='text-center leading-normal text-black font-medium text-3xl mb-6'>
            Connexion à TAXIK
          </h1>
          <div>
            <label htmlFor='email' className='font-bold text-2xl text-black text-center'>
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
          <div>
            <label htmlFor='password' className='font-bold text-2xl text-black text-center'>
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
          <p className='text-center mt-4'>
            Vous n'avez pas de compte ?{' '}
            <Link href='/inscription'>
              Inscrivez-vous
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
