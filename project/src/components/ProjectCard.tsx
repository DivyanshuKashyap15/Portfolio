import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tech,
  image,
  github,
  demo
}) => {
  return (
    <div className="bg-gray-900/50 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-400">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tech.map((item, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex gap-4 pt-2">
          <a 
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
          >
            <Github className="h-5 w-5" />
            Code
          </a>
          <a 
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
          >
            <ExternalLink className="h-5 w-5" />
            Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;