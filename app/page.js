import Image from "next/image";
import Header from "./components/Header";
import SearchSection from "./Home.js/SearchSection";
import GoogleMapSection from "./Home.js/GoogleMapSection";
export default function Home() {
  return (<div>
    <Header/>
    <div  className="p-6 grid grid-cols-1 md:grid-cols-3 gap-5 ">
    <div>
       <SearchSection/>
    </div>
    <div>
m      <GoogleMapSection/>
    </div>
    </div>
    </div>
  );
}
