import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='flex justify-center py-4 border-t-4 border-blue-600 text-sm lg:text-xl'>
      Copyright © {currentYear}<span className="ml-1 font-bold">
        Global Beo Mobil Trend</span>. All rights reserved.
    </div>
  )
}

export default Footer