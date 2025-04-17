import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <span className={`text-2xl font-bold ${className}`}>
      <span className="text-primary">Anton Marshall </span>
      <span className="text-[#aece7e]">WebDesign</span>
    </span>
  );
};

export default Logo; 