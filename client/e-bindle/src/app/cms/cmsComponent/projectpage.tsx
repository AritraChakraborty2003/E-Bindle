
// components/ProjectTabBar.tsx
'use client';
import React, { useState, useRef, useLayoutEffect, RefObject } from 'react';
import { motion } from 'framer-motion';

const tabs = [
  { key: 'add', label: 'Add' },
  { key: 'update', label: 'Update' },
  { key: 'delete', label: 'Delete' },
];

export default function Projectpage() {
  const [activeTab, setActiveTab] = useState('add');
  const tabRefs = useRef<Array<RefObject<HTMLButtonElement | null>>>([]);

  // Store tab positions for underline animation
  const [underlineProps, setUnderlineProps] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    // Initialize refs
    if (tabRefs.current.length !== tabs.length) {
      tabRefs.current = Array(tabs.length)
        .fill(null)
        .map(() => React.createRef<HTMLButtonElement>() as RefObject<HTMLButtonElement>);
    }
    // Get active tab position
    const idx = tabs.findIndex((t) => t.key === activeTab);
    const ref = tabRefs.current[idx];
    if (ref && ref.current) {
      const { offsetLeft, offsetWidth } = ref.current;
      setUnderlineProps({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeTab]);

  return (
    <div className='h-[100vh] flex justify-center'>
    <nav className=" mt-30 z-50 w-full max-w-xl ">
      <div className="relative flex items-center justify-center bg-white rounded-full shadow-xl px-2 py-2">
        <div className="flex space-x-2 px-2 py-1 w-full">
          {tabs.map((tab, idx) => (
            <button
              key={tab.key}
              ref={tabRefs.current[idx] || (tabRefs.current[idx] = React.createRef())}
              onClick={() => setActiveTab(tab.key)}
              className={`relative flex-1 px-6 py-3 rounded-full font-semibold text-lg focus:outline-none transition-colors duration-200
                ${activeTab === tab.key ? 'text-indigo-700' : 'text-gray-500 hover:text-indigo-700'}`}
              style={{ zIndex: 1 }}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {/* Animated underline */}
        <motion.div
          className="absolute top-2 left-0 h-[calc(100%-1rem)] bg-indigo-100 rounded-full z-0"
          animate={{
            left: underlineProps.left,
            width: underlineProps.width,
          }}
          transition={{
            type: 'spring',
            bounce: 0.3,
            duration: 0.5,
          }}
        />
        {/* Animated bottom bar */}
        <motion.div
          className="absolute bottom-1 left-0 h-1 bg-indigo-500 rounded-full z-10"
          animate={{
            left: underlineProps.left + 16, // 16px padding (px-6) on each button
            width: underlineProps.width - 32, // subtract padding on both sides
          }}
          transition={{
            type: 'spring',
            bounce: 0.2,
            duration: 0.5,
          }}
        />
      </div>
    </nav>
    </div>
  );
}
