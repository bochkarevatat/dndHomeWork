import addCard from"./addCard.js";import managerCard from"./managerCard.js";import dndCard from"./dndCard.js";import{loadStorage}from"./storage.js";dndCard(),loadStorage(),managerCard(),addCard(),window.addEventListener("load",loadStorage());