import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com"

export const Contact = () => {
const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
})

    



    const handleSubmit = (e)=> {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_API_KEY)
        .then((value) => {
            console.log(value.text);
            alert("Message sent")
            setFormData({name: "", email:"", message:""})
        })
        .catch((error)=> {
            console.error("error" , error)
            alert("oops! something went wrong. Please try again later...")})
        
    }
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="w-150 px-4">
          <h2 className="text-3xl text-center font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            {" "}
            Get In Touch
          </h2>
          <form className="space-y-6 " onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="name"
                value={formData.name}
                onChange={(e)=> setFormData({...formData, name: e.target.value})}
                required
                className="w-full px-4 py-3 text-white border border-white/10 rounded bg-white/5 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={(e)=> setFormData({...formData, email: e.target.value})}
                required
                className="w-full px-4 py-3 text-white border border-white/10 rounded bg-white/5 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="your message..."
                value={formData.message}
                onChange={(e)=> setFormData({...formData, message: e.target.value})}
                required
                className="w-full px-4 py-3 text-white border border-white/10 rounded bg-white/5 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
            </div>
            <button className="w-full text-white bg-blue-500 py-2 font-semibold cursor-pointer hover:-translate-y-1 transition duration-500">Send message</button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
