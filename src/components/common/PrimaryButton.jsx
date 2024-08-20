import React from 'react'
import Icons from './Icons';

const PrimaryButton = ({ children, className}) => {
  return (
    <button
      className={`bg-black-blue relative after:absolute overflow-hidden after:top-0 hover:after:right-0 after:bottom-0 after:left-0 after:bg-white border-dark-blue border-2 hover:text-dark-blue after:z-[-1] z-[1] after:duration-300 after:right-[100%] font-cabin flex items-center rounded-[14px] px-3 md:px-6 py-1.5 md:py-3.5 group !leading-150 font-semibold text-white text-sm sm:text-base ${className} `}
    >
      {children}{" "}
      <span className="mt-1 group-hover:translate-x-1 ml-2.5 duration-300">
        <Icons icon="button-arrow" />
      </span>
    </button>
  );
};

export default PrimaryButton
