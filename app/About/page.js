import React from 'react';
import HeaderHome from '../components/HeaderHome';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <HeaderHome/>
 
      <div className="relative mx-0 px-4 py-80 h-[calc(100vh - 12rem)] rounded-[4rem] overflow-hidden bg-cover bg-center"
       style={{backgroundImage: "url('/about.jpeg')"}}>
         <div className='absolute bg-slate-900 inset-0 w-full h-full opacity-30 z-20'>
        <div className="container px-7 justify-end items-start">
          <h1 className="text-6xl text-white font-extrabold py-8 mt-[30rem]">À propos de nous</h1>
        </div>
      </div>
      </div>
      <br/><br/><br/><br/>
      {/* Contenu */}
      <div className="container mx-auto px-4 py-8" >
        <p className="text-4xl italic font-serif text-center-justify text-left leading-snug">
              " Chez Taxik, nous sommes passionnés par la fourniture d'un service exceptionnel. 
          Depuis notre fondation, nous nous engageons à révolutionner l'industrie du taxi en offrant une expérience de voyage sûre, fiable et pratique à nos clients.<br/><br/>
         Notre service de gestion de taxis vous permet de réserver facilement un taxi en quelques clics seulement. Choisissez parmi une variété de véhicules, suivez votre chauffeur en temps réel et payez en toute sécurité depuis l'application. <br/><br/>
         Nous sommes fiers de notre équipe dévouée de professionnels passionnés par l'innovation et le service à la clientèle. Notre entreprise repose sur des valeurs de transparence, d'intégrité et de respect, et nous nous engageons à dépasser les attentes de nos clients chaque jour. <br/><br/>
         Nous sommes là pour vous fournir un service de gestion de taxis de qualité, où que vous alliez. N'hésitez pas à nous contacter si vous avez des questions ou des préoccupations. Merci de nous faire confiance pour vos déplacements."<br/><br/>
        </p>
      </div>
      <br/><br/><br/><br/>
      {/* Texte supplémentaire */}
      <div className="container mx-auto px-4 mt-6">
        <div className="flex justify-between  items-center">
          <h1 className='text-3xl font-bold italic'>Direction Taxik</h1><br/><br/>
          <p className="italic text-2xl font- text-right">"Taxik est développé par Salwa Zagri et Hadiatou Keita en 2024 dans le cadre de leur projet de fin d'étude pour le diplôme de la licence en Mathématiques-informatiques."</p>
        </div>
      </div>

      {/* Images des propriétaires */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between">
          <div></div>
          <img className="w-1/3 h-auto mr-4" src="/MrsHadiatou.png" alt="Propriétaire 1" />
          <img className="w-2/3 h-auto ml-4" src="/MrsSalwa.png" alt="Propriétaire 2" />
        </div>
      </div>
      
      <Footer/>
    </div>
  );
}

export default About;
