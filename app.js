const main = document.querySelector(".main");
const typeArea = document.querySelector(".typingArea");
const btn = document.querySelector(".btn");

const words = [
  "The quick brown fox jumps over the lazy dog",
  "Coding is an art of turning logic into reality",
  "Innovation distinguishes between a leader and a follower",
  "Software is eating the world",
  "Stay curious and keep learning",
  "Technology is a tool, not a solution",
  "Code your dreams and debug your reality",
  "The future belongs to those who code",
  "Programming is like writing a book; each line is a word",
  "Coding is a superpower that transforms ideas into reality",
  "Programming is problem-solving with a touch of creativity",
  "Embrace the bugs; they are your stepping stones to perfection",
  "The keyboard is your brush, the code is your canvas",
  "A day in the life of a programmer",
  "What is JavaScript?",
  "What is React?",
  "What is a Programming Language?",
  "What's your name?",
  "Where are you from?",
  "This is just a random word",
  "What is Remix.js?",
  "New Technologies",
  "Is programming hard?",
  "Why do you want to become a programmer?",
  "Which programming language do you like the most?",
  "What is Golang? And why do you want to learn it?",
  "What is CSS?",
];

const game = {
  start: 0,
  end: 0,
  user: "",
  arrText: "",
};

btn.addEventListener("click", () => {
  if (btn.textContent === "Start Challenge") {
    play();
    typeArea.value = "";
    typeArea.disabled = false;
  } else if (btn.textContent === "Done") {
    typeArea.disabled = true;
    main.style.borderColor = "white";
    end();
  }
});

function play() {
  const randText = Math.floor(Math.random() * words.length);
  main.textContent = words[randText];
  game.arrText = words[randText];
  main.style.borderColor = "#c8c8c8";
  btn.textContent = "Done";
  const startTime = new Date();
  game.start = startTime.getTime(); // unix timestamp
}

function end() {
  const endTime = new Date();
  game.end = endTime.getTime();
  const totalTime = (game.end - game.start) / 1000;
  game.user = typeArea.value;
  const correct = results();
  main.style.borderColor = "white";
  main.innerHTML = `Time: ${totalTime.toFixed(2)} seconds. Score: ${correct.score} out of ${correct.total}`;
  btn.textContent = "Start Challenge";
}

function results() {
  const valueOne = game.arrText.split(" ");
  const valueTwo = game.user.split(" ");
  let score = 0;
  valueOne.forEach((word, idx) => {
    if (word === valueTwo[idx]) {
      score++;
    }
  });

  return { score, total: valueOne.length };
}









// const main = document.querySelector(".main");
// const typeArea = document.querySelector(".typingArea");
// const btn = document.querySelector(".btn");

// const words = [
//   "A day in the life of programmer",
//   "What is JavaScript?",
//   "What is React?",
//   "What is Programming Language?",
//   "What's your name?",
//   "Where are you from?",
//   "This is just random word",
//   "What is Remix.js?",
//   "New Technologies",
//   "Is programming hard?",
//   "Why do you wanna become a programmer?",
//   "Which programming language you like the most?",
//   "What is Golang? and why do you wanna learn it?",
//   "What is CSS",
// ];

// const game = {
//   start: 0,
//   end: 0,
//   user: "",
//   arrText: "",
// };

// btn.addEventListener("click", () => {
//   if (btn.textContent === "Start Challenge") {
//     play();
//     typeArea.value = "";
//     typeArea.disabled = false;
//   } else if (btn.textContent === "Done") {
//     typeArea.disabled = true;
//     main.style.borderColor = "white";
//     end();
//   }
// });

// function play() {
//   let randText = Math.floor(Math.random() * words.length);
//   main.textContent = words[randText];
//   game.arrText = words[randText];
//   main.style.borderColor = "#c8c8c8";
//   btn.textContent = "Done";
//   const duration = new Date();
//   game.start = duration.getTime(); // unix timestamp
// }

// function end() {
//   const duration = new Date();
//   game.end = duration.getTime();
//   const totalTime = (game.end - game.start) / 1000;
//   game.user = typeArea.value;
//   const correct = results();
//   main.style.borderColor = "white";
//   main.innerHTML = `Time: ${totalTime} Score: ${correct.score} out of ${correct.total}`;
//   btn.textContent = "Start Challenge";
// }

// function results() {
//   let valueOne = game.arrText.split(" ");
//   let valueTwo = game.user.split(" ");
//   let score = 0;
//   valueOne.forEach((word, idx) => {
//     if (word === valueTwo[idx]) {
//       score++;
//     }
//   });

//   return { score, total: valueOne.length };
// }
