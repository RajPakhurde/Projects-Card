const weather = document.querySelector(".weather");
const heading = document.querySelector(".heading");
const card = document.querySelector(".card");
const heart = document.querySelector(".heart");
const btn = document.querySelector(".btn");
var colors = ["red", "#abdcff"];
var colorIndex = 0;

function redheart() {
  heart.style.color = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
  console.log(colorIndex);
}

function openGithub() {
  open("https://github.com/RajPakhurde/Weather-website");
}

function openLive() {
  open("https://rajpakhurde.github.io/Weather-website/");
}
