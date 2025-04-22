import React from "react";
import { Github, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>© {new Date().getFullYear()} Anwar Ahmed. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://github.com/anwar730"
            target="blank"
            className="text-gray-300 hover:text-white"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/anwar-ismail-a5502124b/"
            target="blank"
            className="text-gray-300 hover:text-white"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
