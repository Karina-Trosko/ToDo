import {
    INPUT_LIST_ITEM,
    INPUT_LIST_ITEM_BTN_REMOVE,
} from '../const.js';
import { getNodeFromTemplate } from '../services/utils.js';

export default class TodoListItem {

    constructor({ value }) {
        this._item = getNodeFromTemplate(TodoListItem._getTemplate(value), INPUT_LIST_ITEM);
        this._removeButton = this._item.querySelector(INPUT_LIST_ITEM_BTN_REMOVE);

        this._removeButton.addEventListener("click", () => this._item.remove());
    }

    static _getTemplate(value) {
        return `<div class="input-list-item">
        <div class="input-list-text">${value}</div>
        <button class="input-list-btn-remove">Remove</button>
        </div>`;
    }

    get item() {
        return this._item;
    }
}