"use client";

import React from "react";
import { FaTelegramPlane, FaDiscord, FaTwitter } from "react-icons/fa";

const iconMap = {
  telegram: <FaTelegramPlane />,
  discord: <FaDiscord />,
  twitter: <FaTwitter />,
};

export default function Button({
  text,
  icon,
  className = "",
  variant = "primary",
  onClick,
}) {
  const getButtonClasses = () => {
    const baseClasses =
      "px-4 py-2 rounded-md font-medium flex items-center gap-2 transition-all duration-300";

    if (variant === "primary") {
      return `${baseClasses} neon-btn ${className}`;
    } else if (variant === "outline") {
      return `${baseClasses} bg-transparent border border-[#00E5FF] text-[#00E5FF] hover:bg-[#00E5FF]/10 ${className}`;
    } else {
      return `${baseClasses} bg-[#1a202c] text-white hover:bg-[#2d3748] ${className}`;
    }
  };

  return (
    <button onClick={onClick} className={getButtonClasses()}>
      {icon && iconMap[icon]}
      {text}
    </button>
  );
}
