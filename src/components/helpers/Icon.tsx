import React from "react";

const Icon: React.FC<any> = ({ icon, ...props }) => {
  switch (icon) {
    case "chevronLeft":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="none"
          {...props}
        >
          <path
            fill="#19124F"
            d="M14 17a1 1 0 0 1-.71-.29l-4-4a1 1 0 0 1 0-1.42l4-4a1.003 1.003 0 1 1 1.42 1.42L11.41 12l3.3 3.29a1.002 1.002 0 0 1-.326 1.636A1 1 0 0 1 14 17Z"
          />
        </svg>
      );

    case "chevronRight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="none"
          {...props}
        >
          <path
            fill="#19124F"
            d="M10 17a1 1 0 0 1-.71-1.71l3.3-3.29-3.3-3.29a1.004 1.004 0 0 1 1.42-1.42l4 4a1.002 1.002 0 0 1 0 1.42l-4 4A1 1 0 0 1 10 17Z"
          />
        </svg>
      );
  }
};

export default Icon;
