import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <span className={`text-lg font-medium ${className}`}>
      <span className="text-blue-600">Anton Marshall</span>
      <span className="text-green-500">WebDesign</span>
    </span>
  );
};

export default Logo; 