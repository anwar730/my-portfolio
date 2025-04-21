import React from 'react';
import { Code } from 'lucide-react';
import mypic from "../assets/mypic.jpeg"

function Hero() {
  return (
    <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              <span className="text-indigo-600">Hello,</span> I'm Anwar Ahmed
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-700 mb-6">Full Stack Developer</h2>
            <p className="text-gray-600 text-lg mb-8">I build exceptional digital experiences with modern technologies</p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 shadow-md transition">Get in Touch</a>
              <a href="#projects" className="px-6 py-3 bg-white text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50 transition">View Projects</a>
            </div>
          </div>
          <div className="md:w-5/12">
            <div className="bg-indigo-100 rounded-full p-4 shadow-xl relative">
              {/* Replace with your actual photo */}
              <img src={mypic} alt="Developer" className="rounded-full" />
              <div className="absolute -bottom-4 -right-4 bg-indigo-600 text-white p-4 rounded-full shadow-lg">
                <Code size={32} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;