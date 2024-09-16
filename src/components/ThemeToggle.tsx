// src/components/ThemeToggle.tsx
'use client';

import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'light';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-gray-300 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
        >
            {theme === 'light' ? '🌙 Dark Mode' : '🌞 Light Mode'}
        </button>
    );
};

export default ThemeToggle;
