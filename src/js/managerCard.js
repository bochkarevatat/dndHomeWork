import addCard from './addCard.js';

export default function managerCard() {
  const container = document.querySelector('#container');

  container.addEventListener('click', (event) => {
    event.preventDefault();
    // console.log('click');
    if (event.target.matches('.add-card')) {
      const addContainer = document.createElement('div');
      addContainer.classList.add('add-container');

      const inputTextCard = document.createElement('textarea');
      inputTextCard.classList.add('input-text');
      inputTextCard.placeholder = 'Enter a title for this card...';
      addContainer.appendChild(inputTextCard);

      const addBtn = document.createElement('button');
      addBtn.classList.add('button');
      addBtn.textContent = 'Add Card';
      addContainer.appendChild(addBtn);

      const closeBtn = document.createElement('span');
      closeBtn.classList.add('close');
      closeBtn.textContent = '\u2716';
      addContainer.appendChild(closeBtn);
      event.target.closest('div').appendChild(addContainer);
      event.target.classList.add('visually-hidden');

      inputTextCard.focus();
    }

    if (event.target.matches('.close')) {
      addCard(event);
    }

    if (event.target.matches('.button')) {
      const columnUl = event.target.closest('.block-container').children[1];
      const inputText = event.target
        .closest('.add-container')
        .querySelector('.input-text');

      const li = document.createElement('li');
      li.classList.add('li-card');
      li.textContent = inputText.value;

      const delCard = document.createElement('span');
      delCard.classList.add('card-close', 'visually-hidden');
      delCard.textContent = '\u2716';
      li.insertAdjacentElement('afterBegin', delCard);

      columnUl.appendChild(li);

      addCard(event);
    }

    if (event.target.matches('.card-close')) {
      const delEl = event.target.closest('.li-card');
      delEl.remove();
    }
  });
}
