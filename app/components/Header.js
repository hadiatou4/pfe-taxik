import React from 'react';
import Image from 'next/image'; // Importe Image depuis next/image

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
        </div>
    );
}

export default Header;