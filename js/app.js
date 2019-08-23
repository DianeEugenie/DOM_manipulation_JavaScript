document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded');

  const form = document.querySelect('#new-djmon-form');
  form.addEventListener('submit', handleForm);

  // const emptyList = document.querySelector('#delete-all');
  // emptyList.addEventListener('click', handleEmptyList)

});

const handleNewItemForm = function(event) {
  event.preventDefault();

  const newDJmon = createNewDJmon(event.target);
  const djmonList = document.querySelector('#djmon-list');
  djmonList.appendChild(newDJmon);

  event.target.reset();
};

const createNewDJmon = function (form) {
  
}
