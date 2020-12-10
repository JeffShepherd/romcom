//// Create variables targetting the relevant DOM elements here 👇

var image = document.querySelector('.cover-image');
var title = document.querySelector('.cover-title');
var taglineOne = document.querySelector('.tagline-1');
var taglineTwo = document.querySelector('.tagline-2');
var randomCoverButton = document.querySelector('.random-cover-button');
var ownCoverButton = document.querySelector('.make-new-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var homeButton = document.querySelector('.home-button');
var form = document.querySelector('.form-view');
var completeCoverView = document.querySelector('.home-view');

//// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover;

//// Add your event listeners here 👇
window.addEventListener('load', randomBook); //with event listeners, invoking functions do not need the parens

randomCoverButton.addEventListener('click', randomBook);

ownCoverButton.addEventListener('click', displayFormView);


//// Create your event handlers and other functions here 👇

function displayFormView() {
  completeCoverView.classList.add('hidden');//hide randomcover
  saveCoverButton.classList.add('hidden');  //save cover button
  homeButton.classList.remove('hidden');//make home button appear
  form.classList.remove('hidden');//show form
  randomCoverButton.classList.add('hidden'); //hide random cover button
}




//assembles random book: image, title, and descriptors for tagline
function randomBook() {
  currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)])
  image.src = currentCover.cover;
  title.innerText = currentCover.title;
  taglineOne.innerText = currentCover.tagline1;
  taglineTwo.innerText = currentCover.tagline2;
}




//// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
