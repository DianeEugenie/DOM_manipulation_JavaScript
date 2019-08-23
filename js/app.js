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
  // name.textContent = form.name.value;
  // const nameValue = document.createTextNode(name)
  //orm.name.innerText;
  djmonListItem.appendChild(name);


  const djmon = document.createElement('h4');
  djmon.textContent = form.djmontype.value;
  djmonListItem.appendChild(djmon);

  const backSpin = document.createElement('h4');
  backSpin.textContent = form.backspin.value;
  djmonListItem.appendChild(backSpin);

  const beatJuggle = document.createElement('h4');
  beatJuggle.textContent = form.beatjuggle.value;
  djmonListItem.appendChild(beatJuggle);

  const scratch = document.createElement('h4');
  scratch.textContent = form.scratching.value;
  djmonListItem.appendChild(scratch);

  const slipCue = document.createElement('h4');
  slipCue.textContent = form.slipcue.value;
  djmonListItem.appendChild(slipCue);

  return djmonListItem;
}
