import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Search from "./components/header/search";
import VideoList from "./components/videoList/videoList";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    youtube
      .popular() //
      .then(result=>setVideos(result.items));
  }, []);

  function handleSearchKeyword(q) {
    youtube.search(q)
      .then((items) => setVideos(items))
      .catch((error) => console.log(error));
  }

  return (
    <div className={styles.app}>
      <Search handleSearchKeyword={handleSearchKeyword} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
