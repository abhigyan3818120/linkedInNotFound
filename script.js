
const photos = [
  "anshul-tyagi.png",
  "linkedin.png"
];

const randomPhoto = photos[Math.floor(Math.random() * photos.length)];

document.getElementById("batchPhoto").src = randomPhoto;
