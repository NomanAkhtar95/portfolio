import Image from "next/image";
import Navbar from "./component/navbar";

function Home (){
  return(
    
    <div className="p-5">
      <Navbar/>

    <div className="flex p-4 justify-center items-center">
    <section className="p-10">
   
    <h3 className="font-bold text-xl">Hi, Its Me</h3>
    <h1 className="font-bold text-4xl flex gap-2">I'm<p className="text-orange-600 shadow-black">Noman Akhtar</p></h1>
    <p className="font-bold justify-center">I'm a professional Web Developer & Medical Sales Officer at SAMI Pharmaceuticals Pvt. Lmtd, currently I am a Student at Governor Sindh Initiative for Artificial Intelligence, Web 3.0 & Metaverse. </p>
    </section>

    <section >
    <Image src={'/imj3.png'} alt="profile-pic" width={600} height={600} className="rounded-full drop-shadow-2xl"></Image>
    </section>
    </div>

    </div>
  )
}
export default Home;