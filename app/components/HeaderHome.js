"use client"
import Link from 'next/link'
import React from 'react'
import { useAppContext } from '../context/AppContext';


function HeaderHome() {
    const {setIsChauffeur} = useAppContext()

    const handleOnClickChauffeur=()=>{
        setIsChauffeur(true)
        sessionStorage.setItem("isChauffeur", true)
    }
  return (
    <nav>
    <div class="logo">
        <Link href="">Taxik</Link>
    </div>
    <ul class="navLinks">
        <li> <Link href="/Acceuil">Accueil </Link></li>
        <li> <Link href="/Authentification">Se déplacer </Link></li>
        <li> <Link href="/About">Apropos </Link></li>
        <li> <Link href="/Contact">Contact</Link></li>
        
    </ul>
    <div class="menu">
        <button class="btn">
            Se connecter
        </button>
        <div class="con">
        <Link href="/Authentification" onClick={handleOnClickChauffeur}>Chauffeur</Link>
        <Link href="/Authentification">Passager</Link>
        </div>
    </div>
</nav>
  )
}

export default HeaderHome