'use client'
import React ,{ useState } from 'react'
import Image from 'next/image';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
function InputItem({type}) {
    const [value,setValue]=useState(null);
    const getLatAndLng=()=>{

    }
  return (
    <div className='bg-gray-200 p-3 rounded-lg mt-3 flex items-center gap-4'>
      <Image src='/source.jpeg' width={15} height={15}/>
      {/*<input type='text' placeholder='Lieu' className='bg- w-full outline-none'/>*/}
      <GooglePlacesAutocomplete
      apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
      selectProps={{
        value,
        onchange: (place)=>(getLatAndLng(place)),
        placeholder:'Lieu ',
        isClearable:true,
        className:'w-full',
        components:{
            DropdownIndicator:false,
        },
        styles: {
            control: (provided) => ({
                ...provided,
                backgroundColor:'white',
                border:'none'
            }),
        }
      }}
      />
    </div>
  )
}

export default InputItem
