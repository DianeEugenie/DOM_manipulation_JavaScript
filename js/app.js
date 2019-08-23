document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded');

  const form = document.querySelect('#new-djmon-form');
  form.addEventListener('submit', handleNewItemForm);

  // const emptyList = document.querySelector('#delete-all');
  // emptyList.addEventListener('click', handleEmptyList)

});

const handleNewItemForm = function(event) {
  event.preventDefault();

  const djmonListItem = createNewDJmon(event.target);
  const djmonList = document.querySelector('#djmon-list');
  djmonList.appendChild(djmonListItem;

  event.target.reset();
};

const createNewDJmon = function (form) {
  const djmonListItem = document.createElement('div');
  djmonListItem.classList.add('djmon-list-item');

  const name = document.createElement('h3');
  name.tectContent = form.name.value;
  djmonListItem.appendChild(name);

  const djmon = document.createElement('h4');
  name.tectContent = form.name.value;
  djmonListItem.appendChild(name);

  const instrument = document.createElement('h4');

  const backSpin = document.createElement('h4');

  const beatJuggle = document.createElement('h4');

  const scratch = document.createElement('h4');

  const slipCue = document.createElement('h4');
}
