const images = [
  "images/Championship.jpg",
  "images/Work.jpeg",
  "images/Loss.jpg"
];

const defeat = {
  title: "The Defeat",

  order: [0, 1, 2],

  text: [
    "Lebron James wins NBA Finals",
    "Lebron James working hard to win back-to-back championships",
    "Lebron James struggles to qualify for the playoffs"
  ]
};

const champions = {
  title: "The Championship",

  order: [2, 1, 0],

  text: [
    "Lebron James loses in the NBA Finals",
    "Lebron James determined to payback rivals for NBA Finals loss",
    "Lebron James wins NBA Finals after historic 3-1 series comback"
  ]
};

let currentStory = defeat;
let currentIndex = 0;

// HTML elements
const storyImage = document.getElementById("storyImage");
const storyTitle = document.getElementById("storyTitle");
const storyText = document.getElementById("storyText");
const storyStage = document.getElementById("storyStage");
const progress = document.getElementById("progress");

const nextButton = document.getElementById("nextButton");
const previousButton = document.getElementById("previousButton");


function updateStory() {

  let imageIndex = currentStory.order[currentIndex];

  storyImage.src = images[imageIndex];

  storyTitle.textContent = currentStory.title;
  storyText.textContent = currentStory.text[currentIndex];

  if (currentIndex === 0) {
    storyStage.textContent = "The Beginning";
  } else if (currentIndex === 1) {
    storyStage.textContent = "The Journey";
  } else {
    storyStage.textContent = "The End";
  }

  previousButton.disabled = currentIndex === 0;
  nextButton.disabled = currentIndex === 2;
}

document.getElementById("story1").addEventListener("click", function() {
  currentStory = defeat;
  currentIndex = 0;
  updateStory();
});

document.getElementById("story2").addEventListener("click", function() {
  currentStory = champions;
  currentIndex = 0;
  updateStory();
});

nextButton.addEventListener("click", function() {
  if (currentIndex < 2) {
    currentIndex++;
    updateStory();
  }
});

previousButton.addEventListener("click", function() {
  if (currentIndex > 0) {
    currentIndex--;
    updateStory();
  }
});

updateStory();