import React, { useEffect, useState } from 'react'
import {YOUTUBE_VIDEOS_API} from '../UTILS/constants'
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = (searchQuery) => {
  const[videos,setVideos]=useState([])
  const GOOGLE_API_KEY = "AIzaSyBiNmien1UOkDQpMFEJAJcbX5iIkIt2kDk";
  useEffect(() => {
    
    getVideos();
    
  }, [])
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  };
  
  return (
    <div style={{display:'flex',flexWrap:'wrap'}} className="video">
 {videos[0] && <AdVideoCard info={videos[0]} />}
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}    
    
    </div>
  )
}

export default VideoContainer