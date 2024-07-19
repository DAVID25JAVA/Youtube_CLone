import React from 'react'
import moment from 'moment'

function VideoLength({ time }) {
    const videoLengthSecond = moment().startOf("day").seconds(time).format("H:mm:s")
    
  return (
      <div className='absolute bottom-1 right-1 px-1 rounded-md text-xs bg-black text-white'>{videoLengthSecond}</div>
  )
}

export default VideoLength