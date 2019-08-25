document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded');

  const form = document.querySelector('#new-djmon-form');
  form.addEventListener('submit', handleNewItemForm);

  const emptyList = document.querySelector('#delete-all');
  emptyList.addEventListener('click', handleEmptyList);

  const searchBar = document.querySelector('#site-search');
  searchBar.addEventListener('input', searchSite);

  const listSorter = document.querySelector('#site-sorter');
  listSorter.addEventListener('change', sortSite);

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

  const totalSum = (parseInt(`${form.backspin.value}`) + parseInt(`${form.beatjuggle.value}`) + parseInt(`${form.scratching.value}`) + parseInt(`${form.slipcue.value}`) +
  parseInt(`${form.rating.value}`));

  const totalRatings = addNewElement('h4', `Total Rating : ${totalSum}`);
  totalRatings.classList.add('bold');

  const seenCheckBox = document.createElement('input');
  seenCheckBox.type ='checkbox';
  seenCheckBox.id = 'checkbox';

  const labelCheckBox = addNewElement('label', `Gotcha!`);
  labelCheckBox.classList.add('not-seen-it');
// add event listener to the checkbox
  seenCheckBox.addEventListener('change', handleCheckBox);

// list of elements to be appended to the body
  const appendBody = appendNewElements([djmon, backSpin, beatJuggle, scratch, slipCue, rating, venue, totalRatings], djmonItemBody);

// list of elements to be appended to the full list item
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
  const input = document.querySelector('#site-search');
  const filter = input.value.toLowerCase();
  // get the list array
  const allItems = document.querySelector('#djmon-list').children;

  for (let i = 0; i < allItems.length; i++) {
    // let item = allItems[i];
    //access text of the list item
    let djmonName = allItems[i].innerText.toLowerCase();
    //add hidden function to list item if the value does not match anything in the list item.
    if (djmonName.indexOf(filter) > -1) {
      allItems[i].classList.remove('hidden');
    } else {
      allItems[i].classList.add('hidden');
    };
  };
};

// sort function that manipulates the list based on specific cases
const sortSite = function(event) {
  const selection = event.target.value;
  const list = document.querySelector('#djmon-list');
  const allItems = document.querySelector('#djmon-list').children;

  switch (selection) {
    case this[1].value:
    //html collection not seen as a real array - found function on stackoverflow that uses slice.call.sort in order to turn collection into a real array & MDN also really helpful
      const firstSort = [].slice.call(allItems).sort((item1, item2) => {
      // THE BELOW WORKS!!
        if (item1.children[0].textContent > item2.children[0].textContent) return 1;
        if (item1.children[0].textContent < item2.children[0].textContent) return -1;
        return 0}).map(item => list.appendChild(item));

    break;

    case this[2].value:
      const secondSort = [].slice.call(allItems).sort((item1, item2) => {
        if (item1.children[0].textContent > item2.children[0].textContent) return -1;
        if (item1.children[0].textContent < item2.children[0].textContent) return 1;
        return 0}).map(item => list.appendChild(item));

    break;

    case this[3].value:
      const thirdSort = [].slice.call(allItems).sort((item1, item2) => {
        return parseInt(item2.children[1].children[7].textContent.slice(-2)) - parseInt(item1.children[1].children[7].textContent.slice(-2))
      }).map(item => list.appendChild(item));

    break;

    case this[4].value:

      const fourthSort = [].slice.call(allItems).sort((item1, item2) => {
        return parseInt(item1.children[1].children[7].textContent.slice(-2)) - parseInt(item2.children[1].children[7].textContent.slice(-2))
      }).map(item =>list.appendChild(item));
    break;

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
