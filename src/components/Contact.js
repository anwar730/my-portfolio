import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Get In Touch
          </h2>
          <div className="h-1 w-24 bg-indigo-600 mx-auto mt-4"></div>
          <p className="mt-4 text-gray-600">
            Have a project in mind? Let's work together!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            {/* <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-md transition"
              >
                Send Message
              </button>
            </form> */}
            <form
              className="space-y-6"
              action="https://formspree.io/f/xnndazbl"
              method="POST"
            >
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-md transition"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-indigo-50 p-8 rounded-lg shadow-sm h-full">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Mail className="mr-2 text-indigo-600" size={24} />
                Contact Information
              </h3>
              <div className="space-y-6">
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-indigo-600">anwaarismail449@gmail.com</p>
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p>Nairobi, Kenya</p>
                </div>
                <div>
                  <p className="font-semibold">Connect with me</p>
                  <div className="flex space-x-4 mt-2">
                    <a
                      href="https://github.com/anwar730"
                      target="blank"
                      className="text-gray-700 hover:text-indigo-600"
                    >
                      <Github size={24} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/
anwar-ismail-a5502124b/"
                      target="blank"
                      className="text-gray-700 hover:text-indigo-600"
                    >
                      <Linkedin size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
