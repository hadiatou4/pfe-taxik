import React from 'react';
import { CarListData } from '../Outils/CarListData';
import CarListItem from './CarListItem';

function CarsListOptions({ distance }) {
  return (
    <div className='mt-5'>
      <h2 className='text-[22px] font-bold text-center'>Propositions</h2>
      {CarListData.map((item) => (
        <div key={item.id}>
          <CarListItem car={item} dist={distance} />
        </div>
      ))}
    </div>
  );
}

export default CarsListOptions;
