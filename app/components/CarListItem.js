import Image from 'next/image';
import React from 'react';

function CarListItem({ car, dist }) {
  return (
    <div>
      <div className='flex items-center mt-5 justify-between'>
        <div className='flex items-center gap-5'>
          <Image src={car.image} width={100} height={100} />
          <div >
            <h2 className='font-semibold text-[18px] flex gap-3 items-center'>{car.name}
             <span className='flex gap-2 items-center text-[14px]'><ion-icon name="person-outline"></ion-icon></span>
            </h2>
            <p className='font-bold'>{car.desc}</p>
          </div>
        </div>
        <h2 className='text-[18px] font-semibold '>{(car.amount * dist).toFixed(2)}DHS</h2>
      </div>
    </div>
  );
}

export default CarListItem;
