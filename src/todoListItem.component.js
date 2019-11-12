import {
    INPUT_LIST_ITEM,
    INPUT_LIST_ITEM_BTN_REMOVE,
} from './const.js';

export function getTodoListItem(value) {
    const templateItem = `<div class="input-list-item">
    <div class="input-list-text">${value}</div>
    <button class="input-list-btn-remove">Remove</button>
    </div>`;
    const listItem = new DOMParser()
        .parseFromString(templateItem, "text/html")
        .querySelector(INPUT_LIST_ITEM);
    listItem
        .querySelector(INPUT_LIST_ITEM_BTN_REMOVE)
        .addEventListener("click", () => listItem.remove());
    return listItem;

}