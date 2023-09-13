"use client"

import React from 'react';

const Footer = () => {
  return (
    <div className="border-t border-gray-200 py-6 dark:border-gray-700">
    <div className="container mx-auto text-right">
      <div> &copy; {new Date().getFullYear()}
          {" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-red-600
          bg-clip-text text-transparent">
            Harper Doak
          </span>
        </div>
    </div>
  </div>
  );
}

export default Footer;
