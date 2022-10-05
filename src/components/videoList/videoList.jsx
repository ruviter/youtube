import React from "react";
import Video from "../video/video";

const VideoList = ({ videos }) => {
  return (
    <ul>
      {videos.map((video) => (
        <Video key={video.id} video={video} />
      ))}
    </ul>
  );
};

export default VideoList;
