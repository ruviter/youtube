import React from "react";
import styles from "./video.module.css";
const Video = ({ video }) => {
  return (
    <li className={styles.container}>
      <div className={styles.video}>
        <img
        className={styles.thumbnail}
        src={video.snippet.thumbnails.default.url}
        alt=""
      />
      <div className={styles.metadata}>
        <p className={styles.title}>{video.snippet.title}</p>
        <p className={styles.channelTitle}>{video.snippet.channelTitle}</p>
      </div>
      </div>
      
    </li>
  );
};

export default Video;
