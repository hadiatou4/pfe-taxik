import React from 'react'

function FooterP() {
  return (
    <footer>
    <div class="wrapper">
        <div class="logo">Taxik</div>
        <div class="footerLinks">
            <ul class="left">
                <h2>Suivez nous </h2>
                <li><a href="">Sur instagram</a></li>
                <li><a href="">Sur facebook</a></li>
            </ul>
            <ul class="middle">
                <h2>A propos de nous</h2>
                <li><a href="">Qui sommes-nous ?</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <ul class="right">
                <h2>Menu</h2>
                <li><a href="">Accueil</a></li>
                <li><a href="">Se deconnecter</a></li>
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

export default FooterP
