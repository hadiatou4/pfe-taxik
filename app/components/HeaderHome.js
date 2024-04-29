import React from 'react'

function HeaderHome() {
  return (
    <nav>
    <div class="logo">
        Taxik
    </div>
    <ul class="navLinks">
        <li><a href="">Accueil</a></li>
        <li><a href="">Services</a></li>
        <li><a href="/About">A propos</a></li>
        <li><a href="">Contact</a></li>
    </ul>
    <div class="menu">
        <button class="btn">
            Se connecter
        </button>
        <div class="con">
        <a href="#">Chauffeur</a>
        <a href="#">Passager</a>
        </div>
    </div>
</nav>
  )
}

export default HeaderHome