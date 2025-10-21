import React from "react";
import ecommerce from "../images/ecommerce.png";
import todo from "../images/todo.png";
import password from "../images/pasword.png";
import formHandling from "../images/formHandling.png";
import { RevealOnScroll } from "../RevealOnScroll";

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <RevealOnScroll>
      <div className="min-h-screen flex justify-center items-center py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl text-center font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-500/20 py-5 px-3 rounded-xl hover:-translate-y-1">
              <h3 className="text-2xl text-center pb-3 text-bold">
                Ecommerce Website
              </h3>
              <div>
                <img src={ecommerce} alt="" className="w-[300px] mx-auto" />
              </div>
              <div className="mt-4 flex justify-center gap-5">
                {/* <p>A full stack ecommerce website with user authentication, product management, and payment integration.</p> */}
                {["html", "css", "javascript"].map((tech, key) => {
                  return (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-2 px-5 rounded-full hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(69, 130,246, 0.2)] transition cursor-pointer"
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>


            <div className="bg-gray-500/20 py-5 px-3 rounded-xl hover:-translate-y-1">
              <h3 className="text-2xl text-center pb-3 text-bold">
                TodoList App
              </h3>
              <div>
                <img src={todo} alt="" className="w-[300px] mx-auto" />
              </div>
              <div className="mt-4 flex justify-center gap-5">
                {/* <p>A full stack ecommerce website with user authentication, product management, and payment integration.</p> */}
                {["html", "css", "javascript"].map((tech, key) => {
                  return (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-2 px-5 rounded-full hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(69, 130,246, 0.2)] transition cursor-pointer"
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>


            <div className="bg-gray-500/20 py-5 px-3 rounded-xl hover:-translate-y-1">
              <h3 className="text-2xl text-center pb-3 text-bold">
                Password Generator
              </h3>
              <div>
                <img src={password} alt="" className="w-[300px] mx-auto" />

              </div>
              <div className="mt-4 flex justify-center gap-5">
                {/* <p>A full stack ecommerce website with user authentication, product management, and payment integration.</p> */}
                {["html", "css", "javascript"].map((tech, key) => {
                  return (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-2 px-5 rounded-full hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(69, 130,246, 0.2)] transition cursor-pointer"
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>



            <div className="bg-gray-500/20 py-5 px-3 rounded-xl hover:-translate-y-1">
              <h3 className="text-2xl text-center pb-3 text-bold">
                Ecommerce Website
              </h3>
              <div>
                <img src={formHandling} alt="" className="w-[300px] mx-auto" />
              </div>
              <div className="mt-4 flex justify-center gap-5">
                
                {["tailwind", "javascript", "React"].map((tech, key) => {
                  return (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-2 px-5 mx-auto rounded-full hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(69, 130,246, 0.2)] transition cursor-pointer"
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
