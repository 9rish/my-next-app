// src/app/hr/page.tsx
'use client';

// src/app/hr/page.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ClipLoader } from 'react-spinners';
import ThemeToggle from '@/components/ThemeToggle';

const HRPage = () => {
  const [loading, setLoading] = useState(false);

  const handleButtonClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background-light text-text-light p-8 dark:bg-background-dark dark:text-text-dark">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        {/* Theme Toggle Button */}
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>

        <h1 className="text-4xl font-extrabold text-text-light mb-8 text-center dark:text-text-dark">
          HR Management Dashboard
        </h1>
        
        {/* Employee Information Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-text-light mb-6 dark:text-text-dark">
            Employee Information
          </h2>
          <motion.div
            className="border-2 border-dashed border-gray-300 p-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:border-gray-400 dark:border-gray-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <p className="text-text-light text-center mb-4 dark:text-text-dark">
              Employee chatbot will be integrated here.
            </p>
            <button
              className="bg-primary-light text-white py-2 px-4 rounded-lg transition-all duration-300 ease-in-out hover:bg-primary-dark hover:shadow-md flex items-center justify-center dark:bg-primary-dark dark:hover:bg-primary-light"
              onClick={handleButtonClick}
              disabled={loading}
            >
              {loading ? <ClipLoader size={24} color="#ffffff" /> : 'View Employees'}
            </button>
          </motion.div>
        </section>
        
        {/* Applicant Information Section */}
        <section>
          <h2 className="text-2xl font-semibold text-text-light mb-6 dark:text-text-dark">
            Applicant Information
          </h2>
          <motion.div
            className="border-2 border-dashed border-gray-300 p-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:border-gray-400 dark:border-gray-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <p className="text-text-light text-center mb-4 dark:text-text-dark">
              Applicant chatbot will be integrated here.
            </p>
            <button
              className="bg-primary-light text-white py-2 px-4 rounded-lg transition-all duration-300 ease-in-out hover:bg-primary-dark hover:shadow-md flex items-center justify-center dark:bg-primary-dark dark:hover:bg-primary-light"
              onClick={handleButtonClick}
              disabled={loading}
            >
              {loading ? <ClipLoader size={24} color="#ffffff" /> : 'View Applicants'}
            </button>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default HRPage;
