//// Create variables targetting the relevant DOM elements here 👇

// book elements
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var taglineOne = document.querySelector('.tagline-1');
var taglineTwo = document.querySelector('.tagline-2');

// buttons
var randomCoverButton = document.querySelector('.random-cover-button');
var makeOwnCoverButton = document.querySelector('.make-new-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var homeButton = document.querySelector('.home-button');
var viewSavedCoversButton = document.querySelector('.view-saved-button');
var bookFormSaveButton = document.querySelector('.create-new-book-button');

// views
var formView = document.querySelector('.form-view');
var homeView = document.querySelector('.home-view');
var savedCoversView = document.querySelector('.saved-view');

//form fields
var userCoverInput = document.querySelector('.user-cover');
var userTitleInput = document.querySelector('.user-title');
var userDesc1Input = document.querySelector('.user-desc1');
var userDesc2Input = document.querySelector('.user-desc2');

var savedCoversSection = document.querySelector('.saved-covers-section');

//// We've provided a few variables below
var savedCovers = [];
var currentCover;

//// Add your event listeners here 👇
randomBook();
randomCoverButton.addEventListener('click', randomBook);
makeOwnCoverButton.addEventListener('click', displayFormView);
viewSavedCoversButton.addEventListener('click', displaySavedCovers)
homeButton.addEventListener('click', displayHomeView)
bookFormSaveButton.addEventListener('click', createUserBook);
saveCoverButton.addEventListener('click', saveCover)

//// Create your event handlers and other functions here 👇
function saveCover() {
  for (i = 0; i < savedCovers.length; i++) {
    if (currentCover === savedCovers[i]) {
      return;
    }
  }
  savedCovers.push(currentCover);
}


////function to trigger when save button is clicked
function createUserBook(event) {
  event.preventDefault();
  covers.push(userCoverInput.value); //get url and push to cover array
  titles.push(userTitleInput.value); //get title and push to title array
  descriptors.push(userDesc1Input.value); //get descriptor1 and push to array
  descriptors.push(userDesc2Input.value); //get descriptor2 and push to array
  currentCover = new Cover(userCoverInput.value, userTitleInput.value, userDesc1Input.value, userDesc2Input.value); //create new book instance with Covers class and assign to current cover
  assignValuesToElements();
  displayHomeView();
}

//

function displayFormView() {
  formView.classList.remove('hidden'); //show form
  homeButton.classList.remove('hidden'); //make home button appear
  homeView.classList.add('hidden'); //hide randomcover
  randomCoverButton.classList.add('hidden'); //hide random cover button
  saveCoverButton.classList.add('hidden'); //save cover button
  savedCoversView.classList.add('hidden')
}

function displaySavedCovers() {
  formView.classList.add('hidden'); // hide form
  homeButton.classList.remove('hidden'); //show home button
  homeView.classList.add('hidden'); //hide randomcover
  randomCoverButton.classList.add('hidden') //hide show new random cover button
  saveCoverButton.classList.add('hidden'); //hide save cover button
  savedCoversView.classList.remove('hidden') // show saved cover section
  buildSavedCoverLibrary(); //invoke function to show saved covers
}

function displayHomeView() {
  formView.classList.add('hidden'); //hide form
  homeButton.classList.add('hidden');
  homeView.classList.remove('hidden'); //show randomcover
  makeOwnCoverButton.classList.remove('hidden'); //show make your own cover button
  randomCoverButton.classList.remove('hidden') //how show new random cover button
  saveCoverButton.classList.remove('hidden'); //show save cover button
  savedCoversView.classList.add('hidden');
  viewSavedCoversButton.classList.remove('hidden'); //show view Saved Covers button
}

function buildSavedCoverLibrary() {
  var html = '';
  for (i = 0; i < savedCovers.length; i++) {
    html += `<section class="mini-cover"><img class="cover-image" src=${savedCovers[i].cover}><h2 class="cover-title">${savedCovers[i].title}</h2><h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3><img class="price-tag" src="./assets/price.png"><img class="overlay" src="./assets/overlay.png"></section>`;
    savedCoversSection.innerHTML = html;
  }
}

//assembles random book: image, title, and descriptors for tagline
function randomBook() {
  currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
  assignValuesToElements();
}

function assignValuesToElements() {
  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  taglineOne.innerText = currentCover.tagline1;
  taglineTwo.innerText = currentCover.tagline2;
}


//// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
