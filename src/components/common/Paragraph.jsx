import React from 'react'

const Paragraph = ({ children, className }) => {
  return (
    <p
      className={`font-outfit text-light-grey text-opacity-70 font-normal text-base !leading-146 ${className}`}
    >
      {children}
    </p>
  );
};

export default Paragraph
