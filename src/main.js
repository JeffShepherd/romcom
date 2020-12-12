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
var bookFormSaveButton = document.querySelector('.create-new-book-button');

// views
var form = document.querySelector('.form-view');
var completeCoverView = document.querySelector('.home-view');
var savedCoversLibrary = document.querySelector('.saved-view')

//form fields
var userCover = document.querySelector('.user-cover');
var userTitle = document.querySelector('.user-title');
var userDesc1 = document.querySelector('.user-desc1');
var userDesc2 = document.querySelector('.user-desc2');

//var savedCoversSection = document.querySelector('.saved-covers-section')

//// We've provided a few variables below
var savedCovers = [];

var currentCover;

//// Add your event listeners here 👇
window.addEventListener('load', randomBook); //with event listeners, invoking functions do not need the parens
randomCoverButton.addEventListener('click', randomBook);
ownCoverButton.addEventListener('click', displayFormView);
viewSavedCoversButton.addEventListener('click', displaySavedCovers)
homeButton.addEventListener('click', displayHomeView)
bookFormSaveButton.addEventListener('click', createUserBook);

saveCoverButton.addEventListener('click', saveCover)

//// Create your event handlers and other functions here 👇

function saveCover() {
    savedCovers.push(currentCover);
}


////function to trigger when save button is clicked
function createUserBook(event) {
  event.preventDefault();
  covers.push(userCover.value);//get url and push to cover array
  titles.push(userTitle.value);//get title and push to title array
  descriptors.push(userDesc1.value);//get descriptor1 and push to array
  descriptors.push(userDesc2.value);//get descriptor2 and push to array
  currentCover = new Cover(userCover.value, userTitle.value, userDesc1.value, userDesc2.value);//create new book instance with Covers class and assign to current cover
  image.src = currentCover.cover;//display values on home page
  title.innerText = currentCover.title;//display values on home page
  taglineOne.innerText = currentCover.tagline1;//display values on home page
  taglineTwo.innerText = currentCover.tagline2;//display values on home page
  displayHomeView();
}



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
  currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
  image.src = currentCover.cover;
  title.innerText = currentCover.title;
  taglineOne.innerText = currentCover.tagline1;
  taglineTwo.innerText = currentCover.tagline2;
}

///DRY IDEAS
//display current cover visuals on home page


//// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
