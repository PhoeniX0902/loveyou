const audio = document.getElementById("audioPlayer");
const artImage = document.getElementById("artImage");
const statusLabel = document.getElementById("statusLabel");
const songTitle = document.getElementById("songTitle");
const currentTimeLabel = document.getElementById("currentTime");
const durationLabel = document.getElementById("duration");
const progressBar = document.getElementById("progressBar");

const playPauseBtn = document.getElementById("playPauseBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let index = 0;

const songs = [
  {
    title: "If The World Was Ending",
    audio: "song1.mp3", // replace with real link
    art: "https://magazine-demo.onrender.com/assets/music1-CfXgOANl.gif"
  },
  {
    title: "Dil Jo Tumhara Hai",
    audio: "song2.mp3", // replace with real link
    art: "https://magazine-demo.onrender.com/assets/music3-CExUpC0S.jpg"
  }
];

// Load song (with no fade)
function loadSong(i) {
  audio.src = songs[i].audio;
  songTitle.textContent = songs[i].title;
  statusLabel.textContent = "PAUSED";
  playPauseBtn.textContent = "▶";

  // Fade transition for photo
  artImage.style.opacity = 0;

  setTimeout(() => {
    artImage.src = songs[i].art;
    artImage.style.opacity = 1;
  }, 250); // fade duration
}

// Initial load
loadSong(index);

// Play / Pause
playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = "⏸";
    statusLabel.textContent = "♪ NOW PLAYING ♪";
  } else {
    audio.pause();
    playPauseBtn.textContent = "▶";
    statusLabel.textContent = "PAUSED";
  }
});

// Next song (with fade)
nextBtn.addEventListener("click", () => {
  index = (index + 1) % songs.length;
  loadSong(index);

  audio.play();
  playPauseBtn.textContent = "⏸";
  statusLabel.textContent = "♪ NOW PLAYING ♪";
});

// Previous song (with fade)
prevBtn.addEventListener("click", () => {
  index = (index - 1 + songs.length) % songs.length;
  loadSong(index);

  audio.play();
  playPauseBtn.textContent = "⏸";
  statusLabel.textContent = "♪ NOW PLAYING ♪";
});

// Progress Bar Update
audio.addEventListener("timeupdate", () => {
  let current = Math.floor(audio.currentTime);
  let dur = Math.floor(audio.duration || 0);

  progressBar.value = (current / dur) * 100;

  currentTimeLabel.textContent = formatTime(current);
  durationLabel.textContent = formatTime(dur);
});

// Seek
progressBar.addEventListener("input", () => {
  audio.currentTime = (progressBar.value / 100) * audio.duration;
});

// Time formatter
function formatTime(sec) {
  if (!sec) return "0:00";
  let m = Math.floor(sec / 60);
  let s = Math.floor(sec % 60);
  return `${m}:${s < 10 ? "0" + s : s}`;
}
