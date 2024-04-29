'use client'
import React ,{ useState , useContext, useEffect } from 'react'
import Image from 'next/image';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { SourceContext } from '../context/SourceContext';
import { DestinationContext } from '../context/DestinationContext';

function InputItem({ type }) {
      const [value, setValue] = useState(null);
      const [placeholder,setPlaceholder]=useState(null);
      const { source , setSource}=useContext(SourceContext);
      const { destination , setDestination}=useContext(DestinationContext);
      useEffect(()=>{
        type=='source'
        ?setPlaceholder('Pickup location')
        :setPlaceholder('dropoff location')
      },[]);

      const getLatAndLng = (place,type) => {
      const placeId = place.value.place_id;
      const service = new google.maps.places.PlacesService(document.createElement('div'));
      service.getDetails({ placeId }, (place, status) => {
          if (status === 'OK' && place.geometry && place.geometry.location)
         {
            console.log(place.geometry.location.lat());
            if (type=='source'){
              setSource({
                lat:place.geometry.location.lat(),
                lng:place.geometry.location.lng(),
                name:place.formatted_address,
                label:place.name
              })

            }else{
              setDestination({
                lat:place.geometry.location.lat(),
                lng:place.geometry.location.lng(),
                name:place.formatted_address,
                label:place.name
              })

            }
         }
      });
  };

    
  return (
    <div className='bg-gray-200 p-3 rounded-lg mt-3 flex items-center gap-4'>
      <Image src='/source.jpeg' width={15} height={15}/>
      {/*<input type='text' placeholder='Lieu' className='bg- w-full outline-none'/>*/}
      <GooglePlacesAutocomplete
      apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
      selectProps={{
        value,
        onChange: (place)=>{getLatAndLng(place,type);
        setValue(place)},
        placeholder:'Lieu',
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
