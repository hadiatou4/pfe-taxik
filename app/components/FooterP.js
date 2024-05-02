import React from 'react'

function FooterP() {
  return (
    <footer>
    <div className="wrapper">
        <div className="logo">Taxik</div>
        <div className="footerLinks">
            <ul className="left">
                <h2>Suivez nous </h2>
                <li className='flex items-center'><ion-icon name="logo-instagram"></ion-icon><a href="">Sur instagram</a></li>
                <li className='flex items-center'><ion-icon name="logo-facebook"></ion-icon><a href="">Sur facebook</a></li>
            </ul>
            <ul className="middle">
                <h2>A propos de nous</h2>
                <li><a href="">Qui sommes-nous ?</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <ul className="right">
                <h2>Menu</h2>
                <li><a href="">Accueil</a></li>
                <li><a href="">Se deconnecter</a></li>
            </ul>
        </div>
    </div>
    <div className="bottom">
        <p>Tous droits réservés © Taxik</p>
        <a href="">Conditions d'utilisations</a>
        <a href="">Faq / Support</a>
    </div>
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
   <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
   </footer>
  )
}

export default FooterP
