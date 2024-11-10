import Navbar from "../component/navbar"

function Contact(){
return(
   
<div  className="p-5">
    <Navbar/>
<div className="flex">
    <h1 className="flex flex-col justify-center text-4xl font-bold text-center p-5 text-orange-600">Get In Touch</h1>
    <div className="flex flex-col gap-10 p-9">
    <section className="flex gap-5 justify-start items-center font-bold"><i className="fa-regular fa-envelope text-5xl text-red-600 "></i><a href="mailto:nomanakhtar222@gmail.com">nomanakhtar222@gmail.com</a>
    </section>
    <section className="flex gap-5 justify-start items-center font-bold"><i className="fas fa-map-marker-alt text-5xl text-red-600"></i>House # 754, Shah Wali Ullah Nagar, Sector 11 ½, Orangi Town, Karachi.</section>
    <section className="flex gap-5 justify-start items-center font-bold"><i className="fa-solid fa-phone text-5xl text-blue-700"></i>0310-2833835</section>
    <section className="flex gap-5 justify-start items-center font-bold"><i className="fa-brands fa-github text-5xl"></i></section>
    <section className="flex gap-5 justify-start items-center font-bold"><i className="fa-brands fa-linkedin text-5xl text-blue-800"></i><a href="https://www.linkedin.com/in/noman-akhtar-826840166" target="_blank">Noman Akhtar</a></section>
    </div>
    
</div>


</div>

)
}
export default Contact;