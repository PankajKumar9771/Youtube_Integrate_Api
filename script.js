// script.js
console.log("hello");
function getVideoData() {
  // const channelId = document.getElementById("channelId").value;
  // const maxThumb = document.getElementById("maxThumb").value;

  // if (!channelId || !maxThumb) {
  //   alert("Please enter both Channel ID and Max Thumbnails");
  //   return;
  // }

  const res = fetch(`http://localhost:3000/data`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const mainData = data;
      const container = document.querySelector("#youtube-cont");
      container.innerHTML = ""; // Clear previous results
      const videos = mainData.data.items;

      videos.forEach((video) => {
        let title = video.snippet.title;
        let description = video.snippet.description;
        let thumbnail = video.snippet.thumbnails.high.url;
        let channelTitle = video.snippet.channelTitle;
        let publishedAt = video.snippet.publishedAt;
        const videoCard = document.createElement("div");
        videoCard.classList.add("video-card");

        videoCard.innerHTML = `
                      <img src="${thumbnail}" alt="Video Thumbnail">
                <div class="video-info">
                <h3 class="channelName">Channel_Name : ${channelTitle}</h3>
                     <h3>Title : ${title}</h3>
                     <br/>
                      <br/>
                    <p> Description : ${description}</p>

                    <hr/>
                  <p>Published At : ${publishedAt}</p>
                </div>
            
                `;

        container.appendChild(videoCard);
      });
    })
    .catch((error) => {
      console.error("Error fetching video data:", error.message);
    });
}
getVideoData();
