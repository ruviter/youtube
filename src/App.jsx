import { useEffect, useState } from "react";
import "./App.css";
import VideoList from "./components/videoList/videoList";

function App() {
  const [videos, setVideos] = useState([]);
  const API_KEY = "AIzaSyBNhcdE4LbYnmWr9_Mv-GAU5p0yFn9C6YM";
  useEffect(() => {
    const requestOption = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=5&regionCode=US&key=${API_KEY}`,
      requestOption
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log(error));
  }, []);
  return <div>
    <VideoList videos={videos}/>
  </div>;
}

export default App;
