import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <span className={`text-2xl font-bold ${className}`}>
      <span className="text-blue-600">A</span>
      <span className="text-green-500">M</span>
    </span>
  );
};

export default Logo; 