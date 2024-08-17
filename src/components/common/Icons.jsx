import React from 'react'

const Icons = ({ icon, className = "", ...props }) => {
  const iconsList = {
    "button-arrow": (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.4297 5.92969L20.4997 11.9997L14.4297 18.0697"
          stroke="white"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.5 12H20.33"
          stroke="white"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
   
  };
  return icon && iconsList[icon];
};

export default Icons
