import React from "react";

const Video = ({ video }) => {
  return (
    <li>
      <img src={video.snippet.thumbnails.default.url} alt="" />
      <p>{video.snippet.title}</p>
    </li>
  );
};

export default Video;
