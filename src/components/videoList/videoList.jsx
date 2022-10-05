import React from "react";
import Video from "../video/video";
import styles from './videoList.module.css'
const VideoList = ({ videos }) => {
  return (
    <ul className={styles.videos}>
      {videos.map((video) => (
        <Video key={video.id} video={video} />
      ))}
    </ul>
  );
};

export default VideoList;
