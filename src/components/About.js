import React from 'react';
import { Briefcase, Book, Code } from 'lucide-react';

function About() {
  const skills = ['JavaScript', 'React', 'Node.js','Data Structures & Algorithms', 'PostgreSQL', 'HTML/CSS',  'Git'];
  
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Me</h2>
          <div className="h-1 w-24 bg-indigo-600 mx-auto mt-4"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/3">
            <div className="relative bg-gray-100 rounded-lg p-4 shadow-xl">
              {/* Code illustration instead of personal photo */}
              <div className="bg-indigo-50 p-6 rounded-lg shadow-inner">
                <pre className="bg-gray-900 text-indigo-300 p-5 rounded-lg overflow-hidden shadow-lg">
                  <code>
                    {`function Developer() {
const coffee = 3;
  useEffect(() => {
    if (coffee > 0) {
      learnNewSkills();
    } else {
      refillCoffee();
    }
  }, [coffee]);
                    
  return (
    <Solution />
  );
}`}
                  </code>
                </pre>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-indigo-600 text-white p-3 rounded-full shadow-lg">
                <Code size={28} />
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <p className="text-gray-700 text-lg mb-6">
              I'm a passionate software developer with 3+ years of experience creating web applications and digital solutions. My journey in technology started when I built my first website at 15, and I've been coding ever since.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Briefcase className="mr-2 text-indigo-600" size={24} />
                Work Experience
              </h3>
              <div className="space-y-4">
                
                <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                  <h4 className="font-semibold">Full Stack Developer at WebSolutions</h4>
                  <p className="text-gray-600">2023 - 2024</p>
                  <p className="mt-2">Built responsive web applications using JavaScript, React, and Node.js.</p>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Book className="mr-2 text-indigo-600" size={24} />
                Education
              </h3>
              <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                <h4 className="font-semibold">BS in Software Development</h4>
                <p className="text-gray-600">KCA University, 2022 - Present</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                <h4 className="font-semibold">Software Engineering Course</h4>
                <p className="text-gray-600">Power Learn Project, 2024</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                <h4 className="font-semibold">React Learning Program</h4>
                <p className="text-gray-600">Andela, 2023</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
                <h4 className="font-semibold">Software Engineering Course</h4>
                <p className="text-gray-600">Moringa School , 2022 </p>
              </div>
              
             
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;