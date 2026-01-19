const player = document.getElementById("player");
const video = document.getElementById("video");

function playMovie() {
  video.src =
    "https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4";
  player.style.display = "block";
  video.play();
}

function closePlayer() {
  video.pause();
  video.src = "";
  player.style.display = "none";
}
