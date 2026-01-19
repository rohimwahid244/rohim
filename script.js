/* =======================
   STORAGE
======================= */
let movies = JSON.parse(localStorage.getItem("movies")) || [
  {
    title: "Big Buck Bunny",
    category: "Anime",
    desc: "Film animasi open movie.",
    thumbnail: "https://peach.blender.org/wp-content/uploads/title_anouncement.jpg",
    video: "https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",
  },
];

/* SIMPAN */
function saveMovies() {
  localStorage.setItem("movies", JSON.stringify(movies));
}

/* =======================
   ADMIN UPLOAD
======================= */
function uploadMovie() {
  const title = document.getElementById("title").value;
  const category = document.getElementById("category").value;
  const thumbnail = document.getElementById("thumbnail").value;
  const video = document.getElementById("videoUrl").value;
  const desc = document.getElementById("desc").value;

  if (!title || !video) {
    alert("Judul & Video wajib diisi");
    return;
  }

  movies.push({ title, category, thumbnail, video, desc });
  saveMovies();

  alert("Film berhasil diupload!");
  location.href = "index.html";
}

/* =======================
   FRONTEND
======================= */
const movieList = document.getElementById("movieList");
const hero = document.getElementById("hero");
const heroTitle = document.getElementById("heroTitle");
const heroDesc = document.getElementById("heroDesc");
const heroPlay = document.getElementById("heroPlay");
const player = document.getElementById("player");
const videoPlayer = document.getElementById("video");

/* RENDER */
function renderMovies(list = movies) {
  if (!movieList) return;
  movieList.innerHTML = "";

  list.forEach(movie => {
    const img = document.createElement("img");
    img.src = movie.thumbnail;
    img.onclick = () => setHero(movie);
    movieList.appendChild(img);
  });
}

/* HERO */
function setHero(movie) {
  hero.style.backgroundImage = `url(${movie.thumbnail})`;
  heroTitle.textContent = movie.title;
  heroDesc.textContent = movie.desc;
  heroPlay.onclick = () => playMovie(movie.video);
}

/* PLAYER */
function playMovie(src) {
  videoPlayer.src = src;
  player.style.display = "block";
  videoPlayer.play();
}

function closePlayer() {
  videoPlayer.pause();
  videoPlayer.src = "";
  player.style.display = "none";
}

/* LOAD */
if (movies.length && hero) {
  setHero(movies[0]);
  renderMovies();
}
