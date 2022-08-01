export default function addCard(event) {
  const addContainer = document.querySelector('.add-container');
  // console.log(addContainer);
  const column = event.target.closest('.block-container').children[2];
  column.classList.remove('visually-hidden');
  event.target.closest('div').remove(addContainer);
}
