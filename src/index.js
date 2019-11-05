import "./style.css";

import {
    MAIN_BLOCK,
    INPUT_FIELD,
    INPUT_BTN_ADD,
    INPUT_LIST,
    INPUT_LIST_ID,
    INPUT_LIST_ITEM_ID,
    INPUT_LIST_ITEM,
    INPUT_LIST_ITEM_TEXT,

} from './const.js'

const btnAdd = document.querySelector(INPUT_BTN_ADD);
const inputField = document.querySelector(INPUT_FIELD);
const mainBlock = document.querySelector(MAIN_BLOCK);
const inputList = getTemplateNode(INPUT_LIST_ID, INPUT_LIST);

mainBlock.append(inputList);
btnAdd.addEventListener("click", addItem);
inputField.addEventListener("keydown", addItemByKeydown);

function getTemplateNode(id, selector) {
    return document
        .querySelector(id)
        .content.querySelector(selector)
        .cloneNode(true);
}

function addItemByKeydown(eventOfItem) {
    if (+eventOfItem.keyCode === 13) addItem();
}

function addItem() {
    const listItem = getTemplateNode(INPUT_LIST_ITEM_ID, INPUT_LIST_ITEM);
    listItem.querySelector(INPUT_LIST_ITEM_TEXT).textContent = inputField.value;
    inputField.value = "";
    listItem
        .querySelector(INPUT_LIST_ITEM_BTN_REMOVE)
        .addEventListener("click", () => listItem.remove());
    inputList.append(listItem);
}