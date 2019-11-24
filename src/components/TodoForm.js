import { TEMPLATE, } from "../templates/TodoForm.js";
import {
    INPUT_BTN_ADD,
    INPUT_FIELD,
    INPUT_BLOCK,
} from "../const.js";
import { getNodeFromTemplate } from "../services/utils.js";

export default class TodoForm {

    constructor(handler = null) {

        this._addItemHandler = handler;

        this._node = getNodeFromTemplate(TEMPLATE, INPUT_BLOCK);
        this._addButton = this._node.querySelector(INPUT_BTN_ADD);
        this._input = this._node.querySelector(INPUT_FIELD);

        this._addItem = this._addItem.bind(this);
        this._addItemByKeydown = this._addItemByKeydown.bind(this);

        this._addButton.addEventListener("click", this._addItem);
        this._input.addEventListener("keydown", this._addItemByKeydown);

    }

    _addItem() {
        const value = this._input.value;
        if (value !== "") {
            this._addItemHandler(value);
            this._input.value = "";
        }
    }
    _addItemByKeydown(eventOfItem) {

        if (Number(eventOfItem.keyCode) === 13) { this._addItem(); }
    }

    set addItemHandler(handler) {
        this._addItemHandler = handler;
    }

    get node() {
        return this._node;
    }
}