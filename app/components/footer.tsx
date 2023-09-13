"use client"

import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-6 dark:border-gray-700">
    <div className="container mx-auto text-right">
      <p> &copy; {new Date().getFullYear()}
          {" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-red-600
          bg-clip-text text-transparent">
            Harper Doak
          </span>
        </p>
    </div>
  </footer>
  );
}

export default Footer;
