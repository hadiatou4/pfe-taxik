import React from 'react';
import HeaderHome from '../components/HeaderHome';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
        <HeaderHome/>
         <div>
           <p>
           "Chez Taxik, nous sommes passionnés par la fourniture d'un service exceptionnel. Depuis notre fondation, nous nous engageons à révolutionner l'industrie du taxi en offrant une expérience de voyage sûre, fiable et pratique à nos clients.
         Notre service de gestion de taxis vous permet de réserver facilement un taxi en quelques clics seulement. Choisissez parmi une variété de véhicules, suivez votre chauffeur en temps réel et payez en toute sécurité depuis l'application.
         Nous sommes fiers de notre équipe dévouée de professionnels passionnés par l'innovation et le service à la clientèle. Notre entreprise repose sur des valeurs de transparence, d'intégrité et de respect, et nous nous engageons à dépasser les attentes de nos clients chaque jour.Nous sommes là pour vous fournir un service de gestion de taxis de qualité, où que vous alliez. N'hésitez pas à nous contacter si vous avez des questions ou des préoccupations. Merci de nous faire confiance pour vos déplacements."
           </p>
         </div>
        <Footer/>
    </div>
  );
}
export default About;
