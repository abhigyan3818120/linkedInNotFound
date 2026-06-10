
const photos = [
  "anshul-tyagi.png",
  "yusuff121.png",
  "amitji.png",
  "deepakji.png",
  "jujuji.png",
  "combine.png",
  "gyan.png",
  "kundankk.png",
  "maheshh.png",
  "rds.png",
  "tt.png"
];

let currentIndex = parseInt(localStorage.getItem("imageIndex")) || 0;

document.getElementById("batchPhoto").src = photos[currentIndex];

currentIndex = (currentIndex + 1) % photos.length;
localStorage.setItem("imageIndex", currentIndex);
