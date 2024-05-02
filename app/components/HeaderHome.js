import Link from 'next/link'
import React from 'react'

function HeaderHome() {
  return (
    <nav>
    <div class="logo">
        <Link href="">Taxik</Link>
    </div>
    <ul class="navLinks">
        <li> <Link href="/Acceuil">Accueil </Link></li>
        <li> <Link href="/Authentification" target='blank'>Se déplacer </Link></li>
        <li> <Link href="/About">Apropos </Link></li>
        <li> <Link href="/Contact">Contact</Link></li>
        
    </ul>
    <div class="menu">
        <button class="btn">
            Se connecter
        </button>
        <div class="con">
        <a href="/Authentification">Chauffeur</a>
        <a href="/Authentification">Passager</a>
        </div>
    </div>
</nav>
  )
}

export default HeaderHome