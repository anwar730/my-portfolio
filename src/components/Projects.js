import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import explorr from "../assets/explorr.png"
import powerbipro from '../assets/powerbipro.png'
import portofolio from "../assets/portoflio.png"

function Projects() {
  const projects = [
    {
      title: "PowerBI Pro Academy",
      desc: "Empowers businesses with expert-led data visualization, training, and analytics solutions using Microsoft Power BI.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      image: powerbipro,
      github: "https://github.com/anwar730/powerbipro",
      demo: "https://powerbipro.vercel.app/"
    },
    {
      title: "Personal Portfolio",
      desc: "A sleek and responsive portfolio website built to showcase my web development projects for creating impactful digital solutions.",
      tech: ["React", "Firebase", "Tailwind CSS"],
      image: portofolio,
      github: "https://github.com/anwar730/my-portofolio",
      demo: "https://my-portofolio-tawny-beta.vercel.app/"
    },
    {
      title: "Explorr",
      desc: "Explorr is a modern travel discovery web application that allows users to explore trending destinations, view destination categories, read travel guides, and save for trips.",
      tech: ["React", "Redux", "Tailwind CSS", "PostgreSQL"],
      image: explorr,
      github: "https://github.com/anwar730/Explor",
      demo: "https://explor-hd9kg7thq-anwar730s-projects.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">My Projects</h2>
          <div className="h-1 w-24 bg-indigo-600 mx-auto mt-4"></div>
          <p className="mt-4 text-gray-600">Here are some of my recent projects</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <img src={project.image} alt={project.title} className="w-full h-50 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((item) => (
                    <span key={item} className="px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs">{item}</span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={project.github} target='blank' className="text-indigo-600 hover:text-indigo-800 flex items-center">
                    <Github size={16} className="mr-1" />
                    Code
                  </a>
                  <a href={project.demo} target='blank' className="text-indigo-600 hover:text-indigo-800 flex items-center">
                    <ExternalLink size={16} className="mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;