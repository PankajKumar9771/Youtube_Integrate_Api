const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/data", async (req, res) => {
  const channelId = "UCq-Fj5jknLsUf-MWSy4_brA"; //CodeWithHarry
  const maxThumb = 10;
  await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=${maxThumb}&key=${process.env.YOUTUBE_API_KEY}`
  )
    .then((res) => res.json())
    .then((data) => {
      res.json({ data });
    });
});

app.listen(PORT, (req, res) => {
  console.log("Server is liesting on " + PORT);
});
