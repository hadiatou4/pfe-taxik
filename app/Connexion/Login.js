'use client'
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase.config';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Vérifier d'abord si l'utilisateur existe dans la base de données
      const userDoc = await db.collection('Passagers').where('email', '==', email).get();
      if (userDoc.empty) {
        throw new Error("Utilisateur non trouvé");
      }

      // Authentifier l'utilisateur avec son email et son mot de passe
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Connexion réussie, rediriger l'utilisateur vers la page appropriée
      console.log('User signed in:', userCredential.user);
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
        <button type="submit" disabled={loading}>Se connecter</button>
      </form>
    </div>
  );
}

export default Login;


