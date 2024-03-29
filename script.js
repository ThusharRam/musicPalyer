// console.log("welcome to spotify");

// //initialize the variables

// let songIndex = 0;
// let audioElement = new Audio("song/1.mp3");
// let masterPlay = document.getElementById("masterPlay");
// let myProgressBar = document.getElementById("myProgressBar");
// let gif = document.getElementById("gif");
// let songItems = Array.from(document.getElementsByClassName("songItem"));

// let songs = [
//   {
//     songName: "Warriyo - mortals",
//     filePath: "song/1.mp3",
//     coverPath: "covers/1.jpg",
//   },
//   {
//     songName: "Cielo - Huma-Huma",
//     filePath: "song/2.mp3",
//     coverPath: "covers/2.jpg",
//   },
//   {
//     songName: "Deaf Kev - Invincible",
//     filePath: "song/3.mp3",
//     coverPath: "covers/3.jpg",
//   },
//   {
//     songName: "Diff Heaven - My Heart",
//     filePath: "song/4.mp3",
//     coverPath: "covers/4.jpg",
//   },
//   {
//     songName: "Janji-Heroes-Tonight",
//     filePath: "song/5.mp3",
//     coverPath: "covers/5.jpg",
//   },
//   {
//     songName: "Song 6",
//     filePath: "song/6.mp3",
//     coverPath: "covers/6.jpg",
//   },
//   {
//     songName: "Song 7",
//     filePath: "song/7.mp3",
//     coverPath: "covers/7.jpg",
//   },
//   {
//     songName: "Song 8",
//     filePath: "song/8.mp3",
//     coverPath: "covers/8.jpg",
//   },
//   {
//     songName: "Song 9",
//     filePath: "song/9.mp3",
//     coverPath: "covers/9.jpg",
//   },
//   {
//     songName: "Song 10",
//     filePath: "song/10.mp3",
//     coverPath: "covers/10.jpg",
//   },
// ];

// songsItems.forEach((element) => {
//   element.getElementsByTagName("img")[0].src = songs[i].coverPath;
//   element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
// });

// //audio element.play()

// //handle play/pause click

// masterPlay.addEventListener("click", () => {
//   if (audioElement.paused || audioElement.currentTime <= 0) {
//     audioElement.play();
//     masterPlay.classList.remove("fa-play-circle");
//     masterPlay.classList.add("fa-pause-circle");
//     gif.style.opacity = 1;
//   } else {
//     audioElement.pause();
//     masterPlay.classList.remove("fa-pause-circle");
//     masterPlay.classList.add("fa-play-circle");
//     gif.style.opacity = 0;
//   }
// });

// //listen to events
// audioElement.addEventListener("timeupdate", () => {
//   console.log("timeupdate");
//   //update seekbar
//   progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
//   console.log(progress);
//   myProgressBar.value = progress;
// });

// myProgressBar.addEventListener("change", () => {
//   audioElement.currentTime =
//     (myProgressBar.value * audioElement.duration) / 100;
// });

// const makeAllPlays = () => {
//   Array.from(document.getElementsByClassName("songItemPlay")).forEach(
//     (element) => {
//       element.target.classList.remove("fa-pause-circle");
//       element.target.classList.remove("fa-play-circle");
//     }
//   );
// };

// Array.from(document.getElementsByClassName("songItemPlay")).forEach(
//   (element) => {
//     element.addEventListener("clicck", (e) => {
//       // console.log(e.target);
//       makeAllPlays();
//       e.target.classList.remove("fa-play-circle");
//       e.target.classList.remove("fa-pause-circle");
//     });
//   }
// );
console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "Warriyo - Mortals [NCS Release]",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Cielo - Huma-Huma",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "DEAF KEV - Invincible [NCS Release]-320k",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "Different Heaven & EH!DE - My Heart [NCS Release]",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "Rabba - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "Sakhiyaan - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "Bhula Dena - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "Tumhari Kasam - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/9.jpg",
  },
  {
    songName: "Na Jaana - Salam-e-Ishq",
    filePath: "songs/4.mp3",
    coverPath: "covers/10.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});
// Listen to Events
audioElement.addEventListener("timeupdate", () => {
  // Update Seekbar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `songs/${songIndex + 1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});
