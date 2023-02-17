import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div  className="card">
      <img className="thumbnail" alt="thumbnail" src={thumbnails.medium.url} />
      <ul className="listVideo">
        <li className="title">{title}</li>
        <li className="titlename">{channelTitle}</li>
        <li className="view">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-900 ">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
