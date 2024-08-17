import React from 'react'
import Icons from './Icons';

const PrimaryButton = ({ children, className}) => {
  return (
    <button
      className={`bg-black-blue font-cabin flex items-center rounded-[14px] px-6 py-3.5 group !leading-150 font-semibold text-white text-base ${className} `}
    >
      {children}{" "}
      <span className="mt-1 group-hover:translate-x-1 ml-2.5 duration-300">
        <Icons icon="button-arrow" />
      </span>
    </button>
  );
};

export default PrimaryButton
