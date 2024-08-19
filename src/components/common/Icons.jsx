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
          className="group-hover:stroke-black"
          d="M14.4297 5.92969L20.4997 11.9997L14.4297 18.0697"
          stroke="white"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          className="group-hover:stroke-black"
          d="M3.5 12H20.33"
          stroke="white"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    "buy-arrow": (
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_1_116)">
          <path
            className="group-hover:fill-white"
            d="M19.5001 15.4998H17.5001V8.9098L5.91006 20.4998L4.50006 19.0898L16.0901 7.4998H9.50006V5.4998H19.5001V15.4998Z"
            fill="#2194E8"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_116">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="matrix(1 0 0 -1 0.5 24.5)"
            />
          </clipPath>
        </defs>
      </svg>
    ),
    "dotted-line": (
      <svg className='w-full'
        width="234"
        height="2"
        viewBox="0 0 234 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.2"
          d="M0 1H233.75"
          stroke="black"
          stroke-dasharray="5 5"
        />
      </svg>
    ),
  };
  return icon && iconsList[icon];
};

export default Icons
