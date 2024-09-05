//import Image from "next/image";
//import Classroom from './assets/classroom.png'
import Mission from "./components/Mission";
import Navbar from "./components/Mission";
import Info from "./components/Info";
import Footer from "./components/Footer";


export default function Home() {
  return (
    
    <main className=" min-h-screen">
      {/* <h1>Home page</h1> */}
      <div className="max-w-[1640px] mx-auto p-4">
        <div className="max-h-[500px] relative">
          <div className="absolute w-full h-full text-red-100 max-h-[500px] bg-gradient-to-bl from-transparent to-black flex flex-col justify-end p-10">
            <h1 className="px-4 text-4xl sm:text-7xl md:text-12xl lg:18xl font-bold"> Our Organization </h1>
          </div>
          <img className='w-full max-h-[500px] object-cover' src= 'performance.png' alt="/" />

        </div>
      </div>
      <Mission/>
      <Info/>
      <Footer/>
  
    </main>
  );
}
