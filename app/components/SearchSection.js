"use client"
import React, { useEffect , useContext} from 'react'
import InputItem from './InputItem'
import { DestinationContext } from '../context/DestinationContext'
import { SourceContext } from '../context/SourceContext'

function SearchSection() {
   const { source , setSource}=useContext(SourceContext);
   const { destination , setDestination}=useContext(DestinationContext);
   useEffect(()=>{
      if (source){
       console.log(source);
      
    }
      if(destination){
        console.log(destination)
      }
   },[source]);
  return (
    <div className='p-2 md:pd-5 border-[2px] roundes-xl mt-[100px]'>
      <p className='text-[20px] font-bold '>Reservez votre trajet</p>
      <InputItem type='source'></InputItem>
      <InputItem type='destination'></InputItem>
      <button className='p-3 bg-black w-full mt-5 text-white rounded-lg'>Chercher un chauffeur</button>
    </div>
  )
}

export default SearchSection
