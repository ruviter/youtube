class Youtube {
  constructor(key) {
    this.key = key;
    this.requestOption = {
      method: "GET",
      redirect: "follow",
    };
  }

  async popular() {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=5&regionCode=US&key=${this.key}`,
        this.requestOption
      );
      return await response.json();
    } catch (error) {
      return console.log(error);
    }
  }

  async search(q) {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${q}&regionCode=US&type=video&key=${this.key}`,
        this.requestOption
      );
      const result = await response.json();
      return result.items.map((item) => ({ ...item, id: item.id.videoId }));
    } catch (error) {
      return console.log(error);
    }
  }
}

export default Youtube;
