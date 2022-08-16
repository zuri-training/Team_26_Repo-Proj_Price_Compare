import React from 'react'

const Loading = () => {
  return (
    <div className='section section-center'>
      <div className='loading'></div>
    </div>
  )
}

export default Loading

export const LoadingCenter = ({center}) => {
  return (
    <div className='section section-center'>
        <div className={center ? 'loading loading_center' : 'loading'}></div>
    </div>
  )
}