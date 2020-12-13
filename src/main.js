var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var taglineOne = document.querySelector('.tagline-1');
var taglineTwo = document.querySelector('.tagline-2');
var randomCoverButton = document.querySelector('.random-cover-button');
var makeOwnCoverButton = document.querySelector('.make-new-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var homeButton = document.querySelector('.home-button');
var viewSavedCoversButton = document.querySelector('.view-saved-button');
var bookFormSaveButton = document.querySelector('.create-new-book-button');
var formView = document.querySelector('.form-view');
var homeView = document.querySelector('.home-view');
var savedCoversView = document.querySelector('.saved-view');
var userCoverInput = document.querySelector('.user-cover');
var userTitleInput = document.querySelector('.user-title');
var userDesc1Input = document.querySelector('.user-desc1');
var userDesc2Input = document.querySelector('.user-desc2');
var savedCoversSection = document.querySelector('.saved-covers-section');
var savedCovers = [];
var currentCover;

randomBook();

randomCoverButton.addEventListener('click', randomBook);
makeOwnCoverButton.addEventListener('click', displayFormView);
viewSavedCoversButton.addEventListener('click', displaySavedCovers);
homeButton.addEventListener('click', displayHomeView);
bookFormSaveButton.addEventListener('click', createUserBook);
saveCoverButton.addEventListener('click', saveCover);

function saveCover() {
  for (i = 0; i < savedCovers.length; i++) {
    if (currentCover === savedCovers[i]) {
      return;
    }
  }
  savedCovers.push(currentCover);
}

function createUserBook(event) {
  event.preventDefault();
  covers.push(userCoverInput.value);
  titles.push(userTitleInput.value);
  descriptors.push(userDesc1Input.value);
  descriptors.push(userDesc2Input.value);
  currentCover = new Cover(userCoverInput.value, userTitleInput.value, userDesc1Input.value, userDesc2Input.value);
  assignValuesToElements();
  displayHomeView();
}

function displayFormView() {
  formView.classList.remove('hidden');
  homeButton.classList.remove('hidden');
  homeView.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  savedCoversView.classList.add('hidden');
}

function displaySavedCovers() {
  formView.classList.add('hidden');
  homeButton.classList.remove('hidden');
  homeView.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');
  savedCoversView.classList.remove('hidden');
  buildSavedCoverLibrary();
}

function displayHomeView() {
  formView.classList.add('hidden');
  homeButton.classList.add('hidden');
  homeView.classList.remove('hidden');
  makeOwnCoverButton.classList.remove('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
  savedCoversView.classList.add('hidden');
  viewSavedCoversButton.classList.remove('hidden');
}

function buildSavedCoverLibrary() {
  var html = '';
  for (i = 0; i < savedCovers.length; i++) {
    html += `<section class="mini-cover"><img class="cover-image" src=${savedCovers[i].cover}><h2 class="cover-title">${savedCovers[i].title}</h2><h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3><img class="price-tag" src="./assets/price.png"><img class="overlay" src="./assets/overlay.png"></section>`;
    savedCoversSection.innerHTML = html;
  }
}

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

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
