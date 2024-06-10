import React from 'react'
import { videoCards } from '../../constants/constants'

const VideoSecond = () => {
  return (
    <div className='w-screen px-6 lg:px-48 flex flex-col lg:flex-row gap-8 py-6 lg:py-0 justify-center items-center bg-[url(/./mobile-bg-2.png)] lg:bg-[url(/./background.png)] bg-no-repeat bg-bottom bg-cover'>
        {videoCards.map((video, i) => (
            <div key={i} className="rounded-xl border-4 border-blue-600 flex flex-col items-center justify-between px-8 py-4 gap-y-4">
              <div className="rounded-full border-blue-600 border-4 w-20 h-20 grid place-items-center">
                <video.icon className='w-10 h-10 text-black' />
              </div>
              <h2 className="text-2xl font-bold text-center text-blue-600">{video.title}</h2>
              <p className="text-center text-md font-semibold">{video.text}</p>
            </div>
        ))}
    </div>
  )
}

export default VideoSecond