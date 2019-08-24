document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded');

  const form = document.querySelector('#new-djmon-form');
  form.addEventListener('submit', handleNewItemForm);

  const emptyList = document.querySelector('#delete-all');
  emptyList.addEventListener('click', handleEmptyList);

  const searchBar = document.querySelector('#site-search');
  searchBar.addEventListener('input', searchSite);

  const openForm = document.querySelector('#open-form');
  openForm.addEventListener('click', handleOpenForm);

});

const handleNewItemForm = function(event) {
  event.preventDefault();

  const djmonListItem = createNewDJmon(event.target);
  const djmonList = document.querySelector('#djmon-list');
  djmonList.appendChild(djmonListItem);

  event.target.reset();
};

const addNewElement = function(element, text) {
  entry = document.createElement(element);
  entryText = document.createTextNode(text);
  entry.appendChild(entryText);

  return entry;
};

// takes in an array of elements
const appendNewElements = function(elements, parent) {
  for (var i = 0; i < elements.length; i++) {
    parent.appendChild(elements[i]);
  };
};


const createNewDJmon = function (form) {
  const djmonListItem = document.createElement('div');
  djmonListItem.classList.add('djmon-list-item');

  const djmonItemBody = document.createElement('p');
  djmonItemBody.classList.add('djmon-body-item');
// Name of the entry
  const nameDjmon = addNewElement('h2',`${form.name.value.toUpperCase()}`);
// Body of the entry

  const djmon = addNewElement('h4',`DJ-mon Type: ${form.djmontype.value}`);

  const backSpin = addNewElement('h4',`Back Spin Rating: ${form.backspin.value}`);

  const beatJuggle = addNewElement('h4', `Beat Juggle Rating: ${form.beatjuggle.value}`);

  const scratch = addNewElement('h4', `Scratch Rating: ${form.scratching.value}`);

  const slipCue = addNewElement('h4', `Slip-Cue Rating: ${form.slipcue.value}`);

  const rating = addNewElement('h4', `Awesomeness Level : ${form.rating.value}`);

  const venueSelected = document.querySelector('input[name="venue"]:checked').value;
  const venue = addNewElement('h4', `Favorite Venue: ${venueSelected}`);

  const seenCheckBox = document.createElement('input');
  seenCheckBox.type ='checkbox';
  seenCheckBox.id = 'checkbox';



  const labelCheckBox = addNewElement('label', `Got the T-Shirt!`);
  labelCheckBox.classList.add('not-seen-it');

  seenCheckBox.addEventListener('change', handleCheckBox);


  const appendBody = appendNewElements([djmon, backSpin, beatJuggle, scratch, slipCue, rating, venue], djmonItemBody);

  appendNewElements([nameDjmon, djmonItemBody, seenCheckBox, labelCheckBox], djmonListItem)


  return djmonListItem;
}

const handleCheckBox = function(event) {
  if (event.target.checked) {
    event.target.parentElement.className = 'djmon-list-item-checked';
    event.target.parentElement.lastChild.className = 'seen-it'
  } else {
    event.target.parentElement.className = 'djmon-list-item';
    event.target.parentElement.lastChild.className = 'not-seen-it'
  }
};

const handleEmptyList = function (event) {
  const readingList = document.querySelector('#djmon-list');
  readingList.innerHTML = '';
};

// attempt at search function
const searchSite = function(event) {
  // get the value that is being typed in
  let input = document.querySelector('#site-search');
  const filter = input.value.toUpperCase();
  // get the list
  const list = document.querySelector('#djmon-list');
  // get item of the list
  const allItems = list.children;
  let search;

// get all djmon list items
  for (let i = 0; i < allItems.length; i++) {
    let item = allItems[i];
    let djmonName = allItems[i].childNodes[0].innerText;

    if (djmonName.indexOf(filter) > -1) {
      allItems[i].classList.remove('hidden');
    } else {
      allItems[i].classList.add('hidden');
    };
  };

};

const handleOpenForm = function(event) {
  const formId = event.target.parentElement.parentElement.children[1].children[0]
  if (formId.id === 'new-djmon-form') {
    formId.id = 'new-djmon-form-show';
    event.target.innerText = 'Close DJ-mon Form';
  } else {
    formId.id = 'new-djmon-form';
    event.target.innerText = 'Open DJ-mon Form';
  }
};
