import React from 'react'
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className={`w-screen overflow-x-hidden flex justify-center py-4 border-t-4 border-blue-600 rounded-t-xl text-xs lg:text-xl text-nowrap ${currentPath === '/kontakt' || currentPath === '/video-nadzor' ? 'bg-[url(/./mobile-bg-2.png)]' : 'bg-[url(/./mobile-bg.png)]'} lg:bg-[url(/./background.png)] bg-no-repeat bg-bottom bg-cover`}>
      Copyright © {currentYear}<span className="text-gradient ml-1 font-bold">
        Global Beo Mobil Trend</span>. All rights reserved.
    </div>
  )
}

export default Footer