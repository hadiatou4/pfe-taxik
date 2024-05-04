import React from 'react';
import HeaderHome from '../components/HeaderHome';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <HeaderHome/>
      <div className="relative mx-auto px-4 py-80 h-[calc(100vh - 12rem)] rounded-[4rem] overflow-hidden bg-cover bg-center"
      style={{backgroundImage: "url('/about.jpeg')"}}>
        <div className="container px-7 justify-end items-start">
          <h1 className="text-4xl text-gray-400 font-bold py-8">À propos de nous</h1>
        </div>
      </div>

      {/* Contenu */}
      <div className="container mx-auto px-4">
        <p className="text-3xl font-serif text-center leading-relaxed">
         " Chez Taxik, nous sommes passionnés par la fourniture d'un service exceptionnel. Depuis notre fondation, nous nous engageons à révolutionner l'industrie du taxi en offrant une expérience de voyage sûre, fiable et pratique à nos clients. Notre service de gestion de taxis vous permet de réserver facilement un taxi en quelques clics seulement. Choisissez parmi une variété de véhicules, suivez votre chauffeur en temps réel et payez en toute sécurité depuis l'application. Nous sommes fiers de notre équipe dévouée de professionnels passionnés par l'innovation et le service à la clientèle. Notre entreprise repose sur des valeurs de transparence, d'intégrité et de respect, et nous nous engageons à dépasser les attentes de nos clients chaque jour. Nous sommes là pour vous fournir un service de gestion de taxis de qualité, où que vous alliez. N'hésitez pas à nous contacter si vous avez des questions ou des préoccupations. Merci de nous faire confiance pour vos déplacements."
        </p>
      </div>

      {/* Texte supplémentaire */}
      <div className="container mx-auto px-4 mt-6">
        <div className="flex justify-between items-center">
          <p>Direction Taxik</p>
          <p className="italic text-right">Taxik est développé par Salwa Zagri et Hadiatou Keita en 2024 dans le cadre de leur projet de fin d'étude pour le diplôme de la licence en Mathématiques-informatiques.</p>
        </div>
      </div>

      {/* Images des propriétaires */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between">
          <div className='flex flex-col gap-8'>
          <img className="w-1/3 h-auto mr-4" src="/MrsSalwa.png" alt="Propriétaire 1" />
          </div>
          <div className='flex flex-col gap-8'>
          <img className="w-2/3 h-auto ml-4" src="/MrsHadiatou.png" alt="Propriétaire 2" />
          </div>
        </div>
      </div>
      
      <Footer/>
    </div>
  );
}
export default About;
