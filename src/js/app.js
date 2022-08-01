// TODO: write code here
import addCard from './addCard.js';
import managerCard from './managerCard.js';
import dndCard from './dndCard.js';
import {
  loadStorage,
} from './storage.js';

// console.log('app.js bundled');

dndCard();
loadStorage();
managerCard();
addCard();
window.addEventListener('load', loadStorage());
// console.log(loadStorage());
