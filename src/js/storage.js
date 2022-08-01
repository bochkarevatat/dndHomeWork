/* eslint-disable class-methods-use-this */

const toDo = document.querySelector('#toDo').querySelector('.add');
const inProgress = document.querySelector('#progress').querySelector('.add');
const doNe = document.querySelector('#done').querySelector('.add');

export default function updateStorage() {
  const toDoData = [];
  if (toDo === null) return;
  for (const element of toDo.querySelectorAll('.li-card')) {
    toDoData.push(element.textContent.slice(1));
  }
  localStorage.toDo = JSON.stringify(toDoData);

  const inProgressData = [];
  if (inProgress === null) return;
  for (const element of inProgress.querySelectorAll('.li-card')) {
    inProgressData.push(element.textContent.slice(1));
  }
  localStorage.inProgress = JSON.stringify(inProgressData);

  const doNeData = [];
  if (doNe === null) return;
  for (const element of doNe.querySelectorAll('.li-card')) {
    doNeData.push(element.textContent.slice(1));
  }
  localStorage.doNe = JSON.stringify(doNeData);
}

export function loadStorage() {
  if (localStorage.length === 0) return;

  const containerToDo = JSON.parse(localStorage.toDo);
  const containerProgress = JSON.parse(localStorage.inProgress);
  const containerDone = JSON.parse(localStorage.doNe);

  for (let index = 0; index < containerToDo.length; index += 1) {
    const element = containerToDo[index];

    const li = document.createElement('li');
    li.classList.add('li-card');
    li.textContent = element;

    const delCard = document.createElement('span');
    delCard.classList.add('card-close', 'visually-hidden');
    delCard.textContent = '\u2716';
    li.insertAdjacentElement('afterbegin', delCard);

    toDo.appendChild(li);
  }

  for (let index = 0; index < containerProgress.length; index += 1) {
    const element = containerProgress[index];

    const li = document.createElement('li');
    li.classList.add('li-card');
    li.textContent = element;

    const delCard = document.createElement('span');
    delCard.classList.add('card-close', 'visually-hidden');
    delCard.textContent = '\u2716';
    li.insertAdjacentElement('afterbegin', delCard);

    inProgress.appendChild(li);
  }

  for (let index = 0; index < containerDone.length; index += 1) {
    const element = containerDone[index];

    const li = document.createElement('li');
    li.classList.add('li-card');
    li.textContent = element;

    const delCard = document.createElement('span');
    delCard.classList.add('card-close', 'visually-hidden');
    delCard.textContent = '\u2716';
    li.insertAdjacentElement('afterbegin', delCard);

    doNe.appendChild(li);
  }
}
