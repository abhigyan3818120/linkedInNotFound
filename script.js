
const photos = [
  "anshul-tyagi.png",
  "yusuff121.png",
  "amitji.png",
  "deepakji.png",
  "jujuji.png",
  
];

let previous = localStorage.getItem("lastPhoto");
let current;

do {
  current = photos[Math.floor(Math.random() * photos.length)];
} while (current === previous && photos.length > 1);

document.getElementById("batchPhoto").src = current;
localStorage.setItem("lastPhoto", current);
