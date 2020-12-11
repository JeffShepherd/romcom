//// Create variables targetting the relevant DOM elements here 👇

// book elements
var image = document.querySelector('.cover-image');
var title = document.querySelector('.cover-title');
var taglineOne = document.querySelector('.tagline-1');
var taglineTwo = document.querySelector('.tagline-2');

// buttons
var randomCoverButton = document.querySelector('.random-cover-button');
var ownCoverButton = document.querySelector('.make-new-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var homeButton = document.querySelector('.home-button');
var viewSavedCoversButton = document.querySelector('.view-saved-button');

// views
var form = document.querySelector('.form-view');
var completeCoverView = document.querySelector('.home-view');
var savedCoversLibrary = document.querySelector('.saved-view')

//// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

var currentCover;

//// Add your event listeners here 👇
window.addEventListener('load', randomBook); //with event listeners, invoking functions do not need the parens

randomCoverButton.addEventListener('click', randomBook);

ownCoverButton.addEventListener('click', displayFormView);

viewSavedCoversButton.addEventListener('click', displaySavedCovers)

homeButton.addEventListener('click', displayHomeView)

//// Create your event handlers and other functions here 👇

function displayFormView() {
  completeCoverView.classList.add('hidden');//hide randomcover
  saveCoverButton.classList.add('hidden');  //save cover button
  homeButton.classList.remove('hidden');//make home button appear
  form.classList.remove('hidden');//show form
  randomCoverButton.classList.add('hidden'); //hide random cover button
}

function displaySavedCovers() {
  savedCoversLibrary.classList.remove('hidden') // show saved cover section
  randomCoverButton.classList.add('hidden')//hide show new random cover button
  saveCoverButton.classList.add('hidden');//hide save cover button
  homeButton.classList.remove('hidden');//show home button
  completeCoverView.classList.add('hidden');//hide randomcover
  form.classList.add('hidden'); // hide form
}

function displayHomeView() {
  form.classList.add('hidden');  //hide form
  completeCoverView.classList.remove('hidden');//show randomcover
  randomCoverButton.classList.remove('hidden')//how show new random cover button
  saveCoverButton.classList.remove('hidden');//show save cover button
  viewSavedCoversButton.classList.remove('hidden');  //show view Saved Covers button
  ownCoverButton.classList.remove('hidden');  //show make your own cover button
  savedCoversLibrary.classList.add('hidden');
  homeButton.classList.add('hidden');
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
