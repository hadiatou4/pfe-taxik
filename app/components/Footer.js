import React from 'react'

function Footer() {
  return (
    <footer>
    <div class="wrapper">
        <div class="logo">Taxik</div>
        <div class="footerLinks">
            <ul class="left">
                <h2>Services</h2>
                <li><a href="">Se déplacer en ville</a></li>
                <li><a href="">Se déplacer de ville en ville</a></li>
            </ul>
            <ul class="middle">
                <h2>A propos de nous</h2>
                <li><a href="">Qui sommes-nous ?</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <ul class="right">
                <h2>Pages</h2>
                <li><a href="">Accueil</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">A propos</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
    </div>
    <div class="bottom">
        <p>Tous droits réservés © Taxik</p>
        <a href="">Conditions d'utilisations</a>
        <a href="">Faq / Support</a>
    </div>
</footer>
  )
}

export default Footer