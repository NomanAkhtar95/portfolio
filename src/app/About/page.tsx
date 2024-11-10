import Navbar from "../component/navbar"

function About(){
return(
<div  className="p-5 h-screen">
    <Navbar/>
<div className="grid grid-cols-4 gap-5 p-5 text-center">
    <section className=" p-2 font-bold col-span-4 bg-back2 rounded-3xl">

        <h3>
            I hold a Bachelor's degree in Geography and a Master's in Geology, which have given me a strong foundation in understanding the natural world, its processes, and the intricate relationship between the environment and human activities. With over five years of experience in teaching, I've honed my communication and problem-solving skills, helping students understand complex concepts in an engaging way.</h3>
    </section>
    <section className="col-span-1 bg-back2 font-bold p-2 rounded-3xl ">
        <p>
        Currently, I am working as a Medical Sales Representative at SAMI Pharmaceuticals, where I bridge the gap between cutting-edge healthcare solutions and medical professionals, helping to ensure the best outcomes for patients. My role involves not only a deep understanding of the pharmaceutical industry but also a passion for bringing innovative health solutions to the forefront.
        </p>
    </section>
    <section className="col-span-3 bg-back2 font-bold p-2 rounded-3xl">
        <p>
        In addition to my professional background, I'm actively expanding my knowledge in the field of Artificial Intelligence, intrigued by its potential to revolutionize industries and enhance our daily lives. This combination of skills and interests fuels my ambition to continue learning and evolving in a rapidly changing world.
        </p>
    </section>
    <section className="col-span-4 bg-back2 font-bold p-2 rounded-3xl">
        <p>
        I'm always open to connecting with like-minded professionals and exploring new opportunities for growth and collaboration.
        </p>
    </section>
</div>
</div>
)
}
export default About;