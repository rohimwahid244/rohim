const hero = document.getElementById("hero");
const heroTitle = document.getElementById("heroTitle");
const heroDesc = document.getElementById("heroDesc");
const heroPlay = document.getElementById("heroPlay");
const movieList = document.getElementById("movieList");
const search = document.getElementById("search");

const player = document.getElementById("player");
const video = document.getElementById("video");

/* DATA FILM (BANYAK FILM) */
const movies = [
  {
    title: "Big Buck Bunny",
    desc: "Film animasi open movie.",
    thumbnail: "https://peach.blender.org/wp-content/uploads/title_anouncement.jpg",
    video: "https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",
  },
  {
    title: "Sintel",
    desc: "Film fantasi open license.",
    thumbnail: "https://download.blender.org/durian/trailer/sintel_trailer-480p.jpg",
    video: "https://download.blender.org/durian/movies/sintel-480p.mp4",
  },
  {
    title: "Tears of Steel",
    desc: "Sci-Fi open movie.",
    thumbnail: "https://mango.blender.org/wp-content/uploads/2013/05/blog_post.jpg",
    video: "https://download.blender.org/ED/tears_of_steel_720p.mov",
  },
];

/* HERO DEFAULT */
setHero(movies[0]);

/* TAMPILKAN FILM */
function renderMovies(list) {
  movieList.innerHTML = "";
  list.forEach(movie => {
    const img = document.createElement("img");
    img.src = movie.thumbnail;
    img.title = movie.title;
    img.onclick = () => setHero(movie);
    movieList.appendChild(img);
  });
}

renderMovies(movies);

/* HERO UPDATE */
function setHero(movie) {
  hero.style.backgroundImage = `url(${movie.thumbnail})`;
  heroTitle.textContent = movie.title;
  heroDesc.textContent = movie.desc;
  heroPlay.onclick = () => playMovie(movie.video);
}

/* PLAYER */
function playMovie(src) {
  video.src = src;
  player.style.display = "block";
  video.play();
}

function closePlayer() {
  video.pause();
  video.src = "";
  player.style.display = "none";
}

/* SEARCH */
search.addEventListener("input", () => {
  const value = search.value.toLowerCase();
  const filtered = movies.filter(m =>
    m.title.toLowerCase().includes(value)
  );
  renderMovies(filtered);
});
    
