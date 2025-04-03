import React, { useState } from 'react';
import { Github, Linkedin, Mail, Download, ExternalLink, Menu, X } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import TechStack from './components/TechStack';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-950/80 backdrop-blur-sm z-50 border-b border-blue-900/30">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text">
              DK.dev
            </a>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden pt-4 pb-2`}>
            <div className="flex flex-col space-y-4">
              <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold">
              Hi, I'm <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-transparent bg-clip-text">Divyanshu Kashyap</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400">
              ML Engineer & DevOps Enthusiast
            </p>
            <p className="max-w-2xl text-gray-300">
              Third-year Computer Science student specializing in Machine Learning and DevOps. 
              Passionate about building scalable AI solutions and automating deployment pipelines.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                Get in Touch
              </a>
              <a href="/resume.pdf" className="px-6 py-3 border border-blue-600 rounded-lg hover:bg-blue-900/20 transition-colors inline-flex items-center gap-2">
                <Download className="h-5 w-5" /> Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-gray-300">
                I'm a third-year Computer Science student passionate about Machine Learning 
                and DevOps practices. With a strong foundation in ML algorithms and cloud 
                technologies, I specialize in developing and deploying AI solutions at scale.
              </p>
              <p className="text-gray-300">
                Currently focusing on MLOps, cloud infrastructure, and deep learning, 
                I'm dedicated to bridging the gap between ML development and production 
                deployment through efficient DevOps practices.
              </p>
            </div>
            <TechStack />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard 
              title="MLOps Pipeline Automation"
              description="End-to-end ML pipeline with automated training, testing, and deployment using Kubernetes and MLflow."
              tech={["Python", "Kubernetes", "MLflow", "TensorFlow"]}
              image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
              github="https://github.com"
              demo="https://demo.com"
            />
            <ProjectCard 
              title="Sentiment Analysis API"
              description="Real-time sentiment analysis service with automated scaling and monitoring using Docker and AWS."
              tech={["PyTorch", "Docker", "AWS", "FastAPI"]}
              image="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              github="https://github.com"
              demo="https://demo.com"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <a href="mailto:divyanshu@example.com" className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors">
                  <Mail className="h-5 w-5" />
                  divyanshu@example.com
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors">
                  <Github className="h-5 w-5" />
                  GitHub
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors">
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </a>
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>
              <button type="submit" className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p>© 2024 Divyanshu Kashyap. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;