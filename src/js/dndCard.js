import updateStorage from './storage.js';

let draggedEl = null;
let ghostEl = null;
let startX = null;
let startY = null;
let widthEl;
let heightEl;

export default function dndCard() {
  document.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('li-card')) {
      e.preventDefault();
      // console.log('mousedown')
      document.body.style.cursor = 'grabbing';
      e.target.querySelector('.card-close').classList.add('visually-hidden');
      const {
        top,
        left,
      } = e.target.getBoundingClientRect();
      draggedEl = e.target;
      widthEl = draggedEl.offsetWidth;
      heightEl = draggedEl.offsetHeight;
      startX = e.pageX - left;
      startY = e.pageY - top;

      ghostEl = e.target.cloneNode(true);
      // ghostEl.innerHTML = '';
      ghostEl.style.backgroundColor = '#ede3e3';
      ghostEl.style.width = draggedEl.offsetWidth;
      ghostEl.style.height = draggedEl.offsetHeight;

      draggedEl.classList.add('dragged');
      e.target.parentNode.insertBefore(ghostEl, e.target.nextElementSibling);

      draggedEl.style.left = `${e.pageX - startX}px`;
      draggedEl.style.top = `${e.pageY - startY}px`;
      draggedEl.style.width = `${widthEl}px`;
      draggedEl.style.height = `${heightEl}px`;
    }
  });
  document.addEventListener('mousemove', (e) => {
    e.preventDefault();
    if (!draggedEl) {
      return;
    }
    // ghostEl.style.backgroundColor = '#ede3e3';
    const closest = document.elementFromPoint(e.clientX, e.clientY);
    const {
      top,
    } = closest.getBoundingClientRect();

    if (closest.classList.contains('li-card')) {
      if (e.pageY > window.scrollY + top + closest.offsetHeight / 2) {
        closest.closest('.dnd-todo').insertBefore(draggedEl, closest.nextElementSibling);
      } else {
        closest.closest('.dnd-todo').insertBefore(draggedEl, closest);
      }
    } else if (closest.classList.contains('dnd-todo') && !closest.querySelector('.li-card')) {
      closest.append(draggedEl);
    }
    draggedEl.style.left = `${e.pageX - startX}px`;
    draggedEl.style.top = `${e.pageY - startY}px`;
  });

  document.addEventListener('mouseleave', (e) => {
    if (draggedEl) {
      e.preventDefault();
      // console.log(ghostEl.parentNode);
      ghostEl.parentNode.removeChild(ghostEl);
      // ghostEl.remove()
      draggedEl.classList.remove('dragged');
      draggedEl.style = '';
      ghostEl = null;
      draggedEl = null;
    }
  });

  document.addEventListener('mouseup', (e) => {
    if (draggedEl) {
      const closest = document.elementFromPoint(e.clientX, e.clientY);
      const {
        top,
      } = closest.getBoundingClientRect();
      if (closest.classList.contains('li-card')) {
        if (e.pageY > window.scrollY + top + closest.offsetHeight / 2) {
          closest.closest('.dnd-todo').insertBefore(draggedEl, closest.nextElementSibling);
        } else {
          closest.closest('.dnd-todo').insertBefore(draggedEl, closest);
        }
      } else if (closest.classList.contains('dnd-todo') && !closest.querySelector('.li-card')) {
        closest.append(draggedEl);
      }
      // console.log(updateStorage());
      // console.log(ghostEl.parentNode)
      ghostEl.parentNode.removeChild(ghostEl);
      // ghostEl.remove()
      updateStorage();
      draggedEl.classList.remove('dragged');
      draggedEl.style = '';
      ghostEl = null;
      draggedEl = null;
    }
  });
}
