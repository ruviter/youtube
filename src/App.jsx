import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Search from "./components/header/search";
import PlayVideo from "./components/playVideo/playVideo";
import VideoList from "./components/videoList/videoList";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [videoId, setVideoId] = useState();
  const [play, setPlay] = useState(false);

  useEffect(() => {
    youtube
      .popular() //
      .then((result) => setVideos(result.items));
  }, []);

  function handleSearchKeyword(q) {
    youtube
      .search(q) //
      .then((items) => setVideos(items));
  }

  function videoClick(id) {
    setPlay((play) => (play = true));
    setVideoId(id);
  }

  return (
    <div className={styles.app}>
      <Search handleSearchKeyword={handleSearchKeyword} />
      {play ? <PlayVideo id={videoId} /> : null}
      <VideoList videos={videos} videoClick={videoClick} />
    </div>
  );
}

export default App;
