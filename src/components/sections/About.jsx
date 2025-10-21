import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
   
    let skills = ["html", "css", "javascript", "react", "tailwind css", "git", "github"]
    return <section id="about"
    className="min-h-screen flex items-center justify-center py-20">
         <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl text-center font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">About Me</h2>

            <div className="rounded-xl p-8 border-white/10 hover:-translate-y-0.5 transition-all">
                <p className="text-gray-300">
                    Passionate Developer with experties in building scalable Ui design and creating innovative solution
                </p>
            </div>
            <div className="rounded-xl p-6 border-white/10 text-center hover:-translate-y-0.5 transition-all">
                <h2 className="text-2xl text-semibold mb-4 ">Front end</h2>
                <div className="flex flex-wrap gap-3">
                  {skills.map((tech,key)=> (
                    <span 
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-2 px-5 rounded-full hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(69, 130,246, 0.2)] transition cursor-pointer">
                        {tech}

                    </span>
                  ))}  
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 rouded-xl mt-8 gap-6">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Education</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                   <li>
                    <strong>BS in Computer Science</strong>-- Virtual University of Pakistan (2019 -2023)
                    </li>
                    <li>
                        Relevant Cousework:- Data Structure, WebDevelopment C++ ...
                    </li>

                </ul>
                </div>

                 <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                  <div className="space-y-4 text-gray-300">
                    <div>
                        <h3 className="text-semibold">Software Engineer at Arfa Tower (2020 - present)</h3>
                        <p>Develop and maintain EnterPrise Applications</p>
                    </div>    
                    <div>
                        <h3 className="text-semibold">Intern in Softics in Lahore</h3>
                        <p>Assisted in building frontend components and integrating Restful Api's</p>
                    </div>          
                  </div>
                </div>

            </div>

        </div>
                    </RevealOnScroll>
    </section>
}