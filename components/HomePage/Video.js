import React from 'react'

const Video = () => {
  return (
    <div className='relative w-screen h-[540px] my-[50px]'>
        <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/assets/ShortVideo.mp4"
        autoPlay
        muted
        loop
      />
    </div>
  )
}

export default Video