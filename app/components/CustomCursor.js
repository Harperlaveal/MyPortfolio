"use client"

import React, { useEffect } from 'react';

export default function CustomCursor() {
    useEffect(() => {
        const moveCursor = (e) => {
            const cursor = document.querySelector('.cursor');
            cursor.style.top = e.pageY + 'px';
            cursor.style.left = e.pageX + 'px';
        };
        document.addEventListener('mousemove', moveCursor);
        return ()  => {
            document.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    const cursorStyles = {
        width: '35px',
        height: '35px',
        border: '3px solid purple',  // Style as you want
        borderRadius: '50%',
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none', // So it doesn't interfere with clickable items
        zIndex: 9999
      };

    return (
        <div className="cursor dark:border 1px solid white" style={cursorStyles}></div>
    );
}