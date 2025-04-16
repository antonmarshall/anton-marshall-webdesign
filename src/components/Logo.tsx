import React from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ className = '', width = 40, height = 40 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 500 500"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        {/* A letter */}
        <path
          d="M50 400 L200 100 L350 400 L300 400 L200 200 L100 400 Z"
          fill="#2563eb" // Blue color
          className="transition-colors duration-300"
        />
        {/* M letter */}
        <path
          d="M300 400 L300 100 L400 300 L500 100 L500 400 L450 400 L450 200 L400 300 L350 200 L350 400 Z"
          fill="#84cc16" // Green color
          className="transition-colors duration-300"
        />
      </g>
    </svg>
  );
};

export default Logo; 