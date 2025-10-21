import { RevealOnScroll } from "../RevealOnScroll"

export const Home = () => {
    return <section id="home" className="min-h-screen flex items-center justify-center relative">
        <RevealOnScroll>
        <div className="mx-4 text-center z-10">
            <h1 className="text-6xl md:7xl font-bold mb-6 leading-right bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent
            ">
                Hi, I'm Zain Idrees
            </h1>
            <p className="max-w-lg text-gray-400 text-lg mx-auto mb-8">
                I am Fron end Developer with 3 years of experience in relevant field. My goal is to build solution that offer both exceptional performance and a delightful user experience.
            </p>
            <div className="flex justify-center  space-x-5">
                <a href="#projects"
                className="bg-blue-500 text-white py-3 px-6  transition relative hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)]">view projects</a>
            
            <a href="#contact"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 font-bold transition relative hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]  hover:bg-blue-500/10">contact us</a>
            </div>
        </div>
        </RevealOnScroll>
    </section>
}