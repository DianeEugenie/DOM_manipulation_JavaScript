document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded');

  const form = document.querySelector('#new-djmon-form');
  form.addEventListener('submit', handleNewItemForm);

  // const emptyList = document.querySelector('#delete-all');
  // emptyList.addEventListener('click', handleEmptyList)

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

  const name = document.createElement('h3');
  const nameValue = document.createTextNode(form.name.value);
  const nameInnerText = document.createTextNode(form.name.parentElement.innerText);
  name.appendChild(nameInnerText);
  name.appendChild(nameValue);
  djmonListItem.appendChild(name);


  const djmon = document.createElement('h4');
  const djmonValue = document.createTextNode(form.djmontype.value);
  const djmonInnerText = document.createTextNode(`DJ-mon Type: `);
  djmon.appendChild(djmonInnerText);
  djmon.appendChild(djmonValue);
  djmonListItem.appendChild(djmon);

  const backSpin = document.createElement('h4');
  const backSpinValue = document.createTextNode(form.backspin.value);
  const backSpinInnerText = document.createTextNode(`Back Spin Rating: `);
  backSpin.appendChild(backSpinInnerText);
  backSpin.appendChild(backSpinValue);
  djmonListItem.appendChild(backSpin);

  const beatJuggle = document.createElement('h4');
  const beatJuggleValue = document.createTextNode(form.beatjuggle.value);
  const beatJuggleInnerText = document.createTextNode(`Beat Juggle Rating: `);
  beatJuggle.appendChild(beatJuggleInnerText);
  beatJuggle.appendChild(beatJuggleValue);
  djmonListItem.appendChild(beatJuggle);

  const scratch = document.createElement('h4');
  const scratchValue = document.createTextNode(form.scratching.value);
  const scratchInnerText = document.createTextNode(`Scratch Rating: `);
  scratch.appendChild(scratchInnerText);
  scratch.appendChild(scratchValue);
  djmonListItem.appendChild(scratch);

  const slipCue = document.createElement('h4');
  const slipCueValue = document.createTextNode(form.slipcue.value);
  const slipCueInnerText = document.createTextNode(`Slip-Cue Rating: `);
  slipCue.appendChild(slipCueInnerText);
  slipCue.appendChild(slipCueValue);
  djmonListItem.appendChild(slipCue);

  return djmonListItem;
}
