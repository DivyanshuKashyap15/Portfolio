import React from 'react';

const TechStack: React.FC = () => {
  const technologies = [
    { name: 'Python', level: 92 },
    { name: 'TensorFlow/PyTorch', level: 88 },
    { name: 'Docker', level: 85 },
    { name: 'Kubernetes', level: 80 },
    { name: 'AWS/GCP', level: 78 },
    { name: 'MLOps', level: 85 },
  ];

  return (
    <div className="space-y-4">
      {technologies.map((tech, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-300">{tech.name}</span>
            <span className="text-gray-400">{tech.level}%</span>
          </div>
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-500"
              style={{ width: `${tech.level}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStack;