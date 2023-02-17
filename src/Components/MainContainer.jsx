import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div style={{display:'flex',flexDirection:'column'}}>
    
    <ButtonList/>
    <VideoContainer/>

    </div>
  )
}

export default MainContainer