'use client';
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase.config';
import { collection, getDocs } from 'firebase/firestore'; // Importation de collection et getDocs

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Vérifier d'abord si l'utilisateur existe dans la base de données
      const userQuerySnapshot = await getDocs(collection(db, 'Passagers'));
      userQuerySnapshot.forEach((doc) => {
        const userData = doc.data();
        if (userData.email === email) {
          // Si l'email correspond, tente de connecter l'utilisateur
          signInUser(email, password);
        } else {
          setLoading(false);
          console.error("Utilisateur non trouvé");
        }
      });
    } catch (error) {
      // Gestion des erreurs
      console.error('Error signing in:', error.message);
      setLoading(false);
    }
  };

  const signInUser = async (email, password) => {
    try {
      // Authentifier l'utilisateur avec son email et son mot de passe
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Connexion réussie, rediriger l'utilisateur vers la page appropriée
      window.location.href = '/ProfileUser';
    } catch (error) {
      // Gestion des erreurs d'authentification
      console.error('Error signing in:', error.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Connexion</h2>
      <form onSubmit={handleLogin}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Mot de passe" required />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}

export default Login;
