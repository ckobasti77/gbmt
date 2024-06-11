import React from 'react'
import VideoFirst from '../components/Video/VideoFirst'
import VideoSecond from '../components/Video/VideoSecond'
import Footer from '../components/Footer'

const Video = () => {
  return (
    <div className="overflow-x-hidden">
      <VideoFirst />
      <VideoSecond />
    </div>
  )
}

export default Video