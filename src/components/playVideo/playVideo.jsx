import React from "react";

const PlayVideo = ({ id }) => {
  return (
    <>
      <div>
        <iframe
          id="ytplayer"
          type="text/html"
          width="640"
          height="360"
          src= {`https://www.youtube.com/embed/${id}?autoplay=1&origin=http://example.com`}
          frameborder="0"
        ></iframe>
      </div>
    </>
  );
};

export default PlayVideo;
