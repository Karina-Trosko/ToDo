import {
    INPUT_LIST_ITEM,
    INPUT_LIST_ITEM_BTN_REMOVE,
} from '../const.js';
import { getNodeFromTemplate } from '../services/utils.js';

export default class TodoListItem {

    constructor({ value }, id) {

        this._node = getNodeFromTemplate(this._getTemplate(value, id), INPUT_LIST_ITEM);
        this._removeButton = this._node.querySelector(INPUT_LIST_ITEM_BTN_REMOVE);

        this._id = id;

        this._value = value;
        this._removeHandler = null;

        this._remove = this._remove.bind(this);
        this._removeButton.addEventListener("click", this._remove);
    }

    _remove() {

        this._removeHandler(this._id);

    }

    _getTemplate(value, id) {

        return `<div class="input-list-item" id=i${id}>
        <div class="input-list-text">${value}</div>
        <button class="input-list-btn-remove">Remove</button>
        </div>`;
    }

    get id() {
        return this._id;
    }

    get value() {
        return this._value;
    }

    get node() {
        return this._node;
    }

    set removeHandler(handler) {
        this._removeHandler = handler;
    }
}