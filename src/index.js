import "./style.css";
import {
    MAIN_BLOCK,
    INPUT_FIELD,
    INPUT_BTN_ADD,
} from './const.js';
import { getTodoListItem } from './todoListItem.component.js';
import { getTodoList } from './todoListI.component.js';

const btnAdd = document.querySelector(INPUT_BTN_ADD);
const inputField = document.querySelector(INPUT_FIELD);
const mainBlock = document.querySelector(MAIN_BLOCK);
const inputList = getTodoList();

mainBlock.append(inputList);
btnAdd.addEventListener("click", addItem);
inputField.addEventListener("keydown", addItemByKeydown);

function addItemByKeydown(eventOfItem) {
    if (Number(eventOfItem.keyCode) === 13) { addItem(); }
}

function addItem() {
    const listItem = getTodoListItem(inputField.value);
    inputField.value = "";
    inputList.append(listItem);
}