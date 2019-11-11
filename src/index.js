import "./style.css";

import {
    MAIN_BLOCK,
    INPUT_FIELD,
    INPUT_BTN_ADD,
    INPUT_LIST_ITEM_TEXT,
    INPUT_LIST_ITEM_BTN_REMOVE,

} from './const.js'

import { getTemplateNode } from './utils.js'
import { getTodoListItem, getTodoList } from './todoListItem.component.js'

const btnAdd = document.querySelector(INPUT_BTN_ADD);
const inputField = document.querySelector(INPUT_FIELD);
const mainBlock = document.querySelector(MAIN_BLOCK);
//const inputList = getTemplateNode(INPUT_LIST_ID, INPUT_LIST);
const inputList = getTodoList();


mainBlock.append(inputList);
btnAdd.addEventListener("click", addItem);
inputField.addEventListener("keydown", addItemByKeydown);



function addItemByKeydown(eventOfItem) {
    if (+eventOfItem.keyCode === 13) addItem();
}

function addItem() {
    //const listItem = getTemplateNode(INPUT_LIST_ITEM_ID, INPUT_LIST_ITEM);
    const listItem = getTodoListItem();
    listItem.querySelector(INPUT_LIST_ITEM_TEXT).textContent = inputField.value;


    inputField.value = "";
    listItem
        .querySelector(INPUT_LIST_ITEM_BTN_REMOVE)
        .addEventListener("click", () => listItem.remove());
    inputList.append(listItem);

}