document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded');

  const form = document.querySelector('#new-djmon-form');
  form.addEventListener('submit', handleNewItemForm);

  const emptyList = document.querySelector('#delete-all');
  emptyList.addEventListener('click', handleEmptyList)

});

const handleNewItemForm = function(event) {
  event.preventDefault();

  const djmonListItem = createNewDJmon(event.target);
  const djmonList = document.querySelector('#djmon-list');
  djmonList.appendChild(djmonListItem);

  event.target.reset();
};

const createNewDJmon = function (form) {
  const djmonListItem = document.createElement('div');
  djmonListItem.classList.add('djmon-list-item');

  const djmonItemBody = document.createElement('p');
  djmonItemBody.classList.add('djmon-body-item');

  const nameDjmon = document.createElement('h2');
  const nameValue = document.createTextNode(`${form.name.value}`);
  nameDjmon.appendChild(nameValue);
  djmonListItem.appendChild(nameDjmon);


  const djmon = document.createElement('h4');
  const djmonValue = document.createTextNode(`DJ-mon Type: ${form.djmontype.value}`);
  djmon.appendChild(djmonValue);
  djmonItemBody.appendChild(djmon);

  const backSpin = document.createElement('h4');
  const backSpinValue = document.createTextNode(`Back Spin Rating: ${form.backspin.value}`);
  backSpin.appendChild(backSpinValue);
  djmonItemBody.appendChild(backSpin);

  const beatJuggle = document.createElement('h4');
  const beatJuggleValue = document.createTextNode(`Beat Juggle Rating: ${form.beatjuggle.value}`);
  beatJuggle.appendChild(beatJuggleValue);
  djmonItemBody.appendChild(beatJuggle);

  const scratch = document.createElement('h4');
  const scratchValue = document.createTextNode(`Scratch Rating: ${form.scratching.value}`);
  scratch.appendChild(scratchValue);
  djmonItemBody.appendChild(scratch);

  const slipCue = document.createElement('h4');
  const slipCueValue = document.createTextNode(`Slip-Cue Rating: ${form.slipcue.value}`);
  slipCue.appendChild(slipCueValue);
  djmonItemBody.appendChild(slipCue);

  const rating = document.createElement('h4');
  const ratingValue = document.createTextNode(`Awesomeness Level : ${form.rating.value}`);
  rating.appendChild(ratingValue);
  djmonItemBody.appendChild(rating);


  const venue = document.createElement('h4');
  const venueSelected = document.querySelector('input[name="venue"]:checked').value;
  const venueValue = document.createTextNode(`Favorite Venue: ${venueSelected}`)
  venue.appendChild(venueValue);
  djmonItemBody.appendChild(venue)

  const newCheckBox = document.createElement('input');
  newCheckBox.type ='checkbox';

  const newCheckBoxLabel = document.createElement('label');
  newCheckBoxLabel.classList.add('not-seen-it');
  const newCheckBoxText = document.createTextNode(`Been There!`);
  newCheckBoxLabel.appendChild(newCheckBoxText);

  newCheckBox.addEventListener('change', handleCheckBox);



  djmonListItem.appendChild(djmonItemBody);
  djmonListItem.appendChild(newCheckBox);
  djmonListItem.appendChild(newCheckBoxLabel);



  return djmonListItem;
}

const handleCheckBox = function(event) {
  const seenIt = document.querySelector('.djmon-list-item-checked');
  const notSeenIt = document.querySelector('.djmon-list-item');
  const seenItText = document.querySelector('.seen-it');
  const notSeenItText = document.querySelector('.not-seen-it');
  
  if (event.target.checked) {
    event.target.parentElement.className = 'djmon-list-item-checked';
    notSeenItText.className = 'seen-it'
  } else {
    event.target.parentElement.className = 'djmon-list-item';
    seenItText.className = 'not-seen-it'
  }

};

const handleEmptyList = function (event) {
  const readingList = document.querySelector('#djmon-list');
  readingList.innerHTML = '';
}
