import React from "react";
import Video from "../video/video";
import styles from './videoList.module.css'
const VideoList = ({ videos,videoClick }) => {
  return (
    <ul className={styles.videos}>
      {videos.map((video) => (
        <Video key={video.id} video={video} videoClick={videoClick}/>
      ))}
    </ul>
  );
};

export default VideoList;
