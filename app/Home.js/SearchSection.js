import React from 'react'
import InputItem from './InputItem'

function SearchSection() {
  return (
    <div className='p-2 md:pd-5 border-[2px] roundes-xl mt-[100px]'>
      <p className='text-[20px] font-bold '>Reservez votre trajet</p>
      <InputItem type='source'>Lieu de départ</InputItem>
      <InputItem type='destination'>Lieu d'arrivée</InputItem>
      <button className='p-3 bg-black w-full mt-5 text-white rounded-lg'>Chercher un chauffeur</button>
    </div>
  )
}

export default SearchSection
