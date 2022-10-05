import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [videos, setVideos] = useState([]);
  const API_KEY = "AIzaSyBNhcdE4LbYnmWr9_Mv-GAU5p0yFn9C6YM";
  useEffect(() => {
    const requestOption = {
      method: "GET",
      redirect: "follow",
    };
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=US&key=${API_KEY}`,
      requestOption
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items));
  }, []);
  return (
    <div>
      {videos.map((v) => (
        <li>{v.snippet.title}</li>
      ))}
    </div>
  );
}

export default App;
