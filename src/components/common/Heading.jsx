import React from 'react'

const Heading = ({ children, className }) => {
  return (
    <h2
      className={`font-cabin font-bold md:text-custom-4xl sm:text-4xl text-3xl !leading-130 text-dark-blue ${className} `}
    >
      {children}
    </h2>
  );
};

export default Heading
