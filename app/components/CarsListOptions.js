'use client'
import React, { useState } from 'react';
import { CarListData } from '../Outils/CarListData';
import CarListItem from './CarListItem';
import { useRouter } from 'next/navigation';

function CarsListOptions({ distance }) {
  const [activeIndex, setActiveIndex] = useState();
  const [selectedcar, setSelectedCar] = useState();
  const [paymentOption, setPaymentOption]=useState();
  const router=useRouter();

  return (
    <div className='mt-5 p-5 '>
      <h2 className='text-[22px] font-bold text-center'>Propositions</h2>
      {CarListData.map((item, index) => (
        <div key={item.id} className={`cursor-pointer p-2 rounded-md border-black ${activeIndex === index ? 'border-[2px]' : null}`} onClick={() => {setActiveIndex(index);setSelectedCar(item)}}>
          <CarListItem car={item} dist={distance} />
        </div>
      ))}
  {selectedcar? <div className='flex justify-between fixed bottom-5 shadow-xl bg-white p-3 shadow-xl w-full md:w-[30%] border-[1px] items-center rounded-lg'>
        <h2> Choisir le mode de paiement </h2>
        <button className='p-3 bg-black text-white rounded-lg text-center'onClick={()=>router.push('/payment?amount='+(selectedcar.amount * distance).toFixed(2))}> Chercher un {selectedcar.name}</button>
      </div>:null}
    </div>
  );
}

export default CarsListOptions;
