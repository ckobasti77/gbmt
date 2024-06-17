import React from 'react'
import VideoFirst from '../components/Video/VideoFirst'
import VideoSecond from '../components/Video/VideoSecond'
import Footer from '../components/Footer'
import VideoThird from '../components/Video/VideoThird'
import { Helmet } from 'react-helmet'

const Video = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
        Napredni Sistemi Video Nadzora za Vašu Sigurnost - Global Beo Mobil Trend
        </title>
        <meta
          name="description"
          content="Osigurajte svoj dom ili poslovni prostor sa našim najmodernijim sistemima video nadzora. Nudimo instalaciju, praćenje, održavanje i integraciju vrhunskih kamera."
        />
        <link rel="canonical" href="https://gbmt.rs/video-nadzor" />
      </Helmet>
      <div className="overflow-x-hidden">
        <VideoFirst />
        <VideoSecond />
        <VideoThird />
      </div>
    </>
  )
}

export default Video