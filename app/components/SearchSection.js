'use client'
import React, { useContext, useEffect, useState } from 'react';
import InputItem from './InputItem';
import { DestinationContext } from '../context/DestinationContext';
import { SourceContext } from '../context/SourceContext';
import CarsListOptions from './CarsListOptions';

function SearchSection() {
  const { source } = useContext(SourceContext);
  const { destination } = useContext(DestinationContext);
  const [dist, setDist] = useState(0);

  const calculateDistance = () => {
    if (!source || !destination) return 0;

    // Calcul de la distance euclidienne entre les deux points
    const distance = Math.sqrt(
      Math.pow(destination.lat - source.lat, 2) +
      Math.pow(destination.lng - source.lng, 2)
    );

    // Conversion de la distance en kilomètres
    const distanceInKm = distance * 111.32; // Approximation pour la latitude moyenne
    setDist(distanceInKm);
    return distanceInKm;
  };

  useEffect(() => {
    if (source) {
      console.log(source);
    }
    if (destination) {
      console.log(destination);
    }
  }, [source]);

  return (
    <div>
      <h1>{dist}</h1>
      <div className='p-2 md:pd-5 border-[2px] roundes-xl '>
        <p className='text-[20px] font-bold '>Reservez votre trajet</p>
        <InputItem type='source'></InputItem>
        <InputItem type='destination'></InputItem>
        <h2 className='font-bold text-center text-2xl text-white bg-black p-6'>Voulez-vous personnaliser votre trajet?
          <select className='text-black ml-2 rounded-2xl'>
            <option>Non</option>
            <option>Oui</option>
          </select>
        </h2>
        <button className='p-3 bg-black w-full mt-5 text-white rounded-lg' onClick={calculateDistance}>Chercher un chauffeur</button>
      </div>
      {dist ? <CarsListOptions distance={dist} /> : null}
    </div>
  );
}

export default SearchSection;
