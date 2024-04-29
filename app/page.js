"use client"

import Acceuil from "./Pages/Acceuil"
import Footer from "./components/Footer"
import HeaderHome from "./components/HeaderHome"

// import Image from "next/image";
// import Header from "./components/Header";
// import SearchSection from "./Home.js/SearchSection";
// import GoogleMapSection from "./Home.js/GoogleMapSection";
// import { SourceContext } from "./context/SourceContext";
// import { DestinationContext } from "./context/DestinationContext";

// import { useContext, useState } from "react";
// export default function Home() {
//   const [source , setSource]=useState([])
//   const [destination , setDestination]=useState([])
//   return (<div>
//     <Header/>
//     <SourceContext.Provider value={{source,setSource}}>
//       <DestinationContext.Provider value={{destination,setDestination}}>
//     <div  className="p-6 grid grid-cols-1 md:grid-cols-3 gap-5 ">
//     <div>
//        <SearchSection/>
//     </div>
//     <div>
// m      <GoogleMapSection/>
//     </div>
//     </div>
//       </DestinationContext.Provider>
//     </SourceContext.Provider>
//     </div>
//   );
// }
export default function Home(){
  return ( 
    <div>
    <HeaderHome/>
    <Acceuil></Acceuil>
    <Footer></Footer>
    </div>
  )
}