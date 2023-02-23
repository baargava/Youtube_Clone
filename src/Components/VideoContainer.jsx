import React, { useEffect, useState } from 'react'
import {YOUTUBE_VIDEOS_API} from '../UTILS/constants'
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import Loading from './Loading';

const VideoContainer = () => {
  const[videos,setVideos]=useState([])
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const GOOGLE_API_KEY = "AIzaSyBiNmien1UOkDQpMFEJAJcbX5iIkIt2kDk";

  const handelInfiniteScroll = async () => {
    // console.log("scrollHeight" + document.documentElement.scrollHeight);
    // console.log("innerHeight" + window.innerHeight);
    // console.log("scrollTop" + document.documentElement.scrollTop);
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);

  }, []);

  useEffect(() => {
    
    getVideos();
    
  }, [page])
  const getVideos = async () => {
  const data = await fetch(  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&_page=${page}&chart=mostPopular&regionCode=IN&key="+ GOOGLE_API_KEY );

    const json = await data.json();
    console.log(json.items);
    setVideos((prev) => [...prev, ...json.items]);
    setLoading(false);
  };
  
  return (
    
    <div style={{display:'flex',flexWrap:'wrap'}} className="video">
 {videos[0] && <AdVideoCard info={videos[0]} />}
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}    
           {loading && <Loading />}               
    </div>
  )
}

export default VideoContainer