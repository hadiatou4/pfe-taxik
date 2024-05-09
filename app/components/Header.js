'use client'
import React, { useState, Fragment, useEffect } from 'react';
import Image from 'next/image';
import { useAppContext } from '../context/AppContext';
import { Menu, Transition } from '@headlessui/react';
import classNames from 'classnames';
import Link from 'next/link';

function Header() {
  const headerMenu = [{ id: 1, name: 'Mes courses', icon: '/taxi.jpg' }];
  const {isChauffeur , setIsChauffeur} = useAppContext();
  const [enligne, setEnligne] = useState(false);

  

  const handleOnClick = () => {
    setEnligne(!enligne);
    sessionStorage.setItem("enligne", !enligne)
  };
 
 const handleOnClick1 =( )=> {
    setIsChauffeur(!isChauffeur);
 }
 //get the current location
 //add the markers
 //set the geofire map

 useEffect(()=>{
  setEnligne(sessionStorage.getItem("enligne"))
  //TODO: ensures that teh value is right
  setIsChauffeur(sessionStorage.getItem("isChauffeur"))
 },[])


  return (
    <div className='flex items-center justify-between p-4 pb-3 pl-10 border-b-4'>
      <div className='menu'>
        <h1 className='logo'>Taxik</h1>
        <div className='flex gap-6 items-center'>
          {/* {headerMenu.map((item) => (
            <div className='flex gap-2 items-center' key={item.id}>
              <Image src={item.icon} width={25} height={17} />
              <h2 className='text-[14px] font-medium'>{item.name}</h2>
            </div>
          ))} */}
         
        </div>

        {isChauffeur && (
          <div className='flex gap-3'>
            <Image alt ={"Driver"} src={enligne ? '/online.jpg' : '/offline.jpg'} width={25} height={17} />
            <button onClick={handleOnClick} className='text-2xl font-bold'>
              {enligne ? 'Se déconnecter ' : 'Se mettre en ligne'}
            </button>
          </div>
        )}
      </div>

      <Menu as='div' className='relative ml-3'>
        <div>
          <Menu.Button className='relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
            <span className='absolute -inset-1.5' />
            <span className='sr-only'>Open user menu</span>
            <Image className=  'rounded-full' src='/avatar.jpeg' width={35} height={25} />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='  absolute right-0 z-10 mt-2 w-80 origin-top-right rounded-md bg-white py-2  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href='#'
                  className={classNames(active ? 'bg-gray-100' : '', ' text-xl block px-4 py-2  text-gray-700')}
                >
                  Mon profile
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  onClick={handleOnClick1}
                  href="/Authentifier"
                  className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-xl text-gray-700')}
                >
                  Changer de statut
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href='/Acceuil'
                  className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-xl text-gray-700')}
                >
                  Se déconnecter
                </Link>
                
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href='/History'
                  className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-xl text-gray-700')}
                >
                  Mes historiques
                </Link>
                
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export default Header; {/* {headerMenu.map((item) => (
    <div className='flex gap-2 items-center' key={item.id}>
      <Image src={item.icon} width={25} height={17} />
      <h2 className='text-[14px] font-medium'>{item.name}</h2>
    </div>
  ))} */}
