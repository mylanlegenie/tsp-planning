import React from "react";
import { twMerge } from "tailwind-merge";

const PhoneIcon = ({ size = 24, color = "currentColor", className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={twMerge(className)}
  >
    <path
      d="M6.6 2.8c.5-.5 1.3-.5 1.8 0l2.2 2.2c.5.5.5 1.3 0 1.8l-1.4 1.4c-.2.2-.3.6-.2.9.6 1.6 1.6 3.1 2.9 4.4 1.3 1.3 2.8 2.3 4.4 2.9.3.1.7 0 .9-.2l1.4-1.4c.5-.5 1.3-.5 1.8 0l2.2 2.2c.5.5.5 1.3 0 1.8l-1.2 1.2c-1.2 1.2-3 1.6-4.6 1.1-2.8-.9-5.7-2.7-8.3-5.3-2.6-2.6-4.4-5.5-5.3-8.3-.5-1.6-.1-3.4 1.1-4.6L6.6 2.8z"
      fill={color}
    />
  </svg>
);

export default PhoneIcon;
