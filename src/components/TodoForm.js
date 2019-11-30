import { TEMPLATE, } from "../templates/TodoForm.js";
import { SEARCH_TEMPLATE, } from "../templates/TodoSearch.js";
import {
    INPUT_BTN_ADD,
    INPUT_FIELD,
    INPUT_BLOCK,
    SEARCH_BLOCK,
    SEARCH_FIELD,
} from "../const.js";
import { getNodeFromTemplate } from "../services/utils.js";

export default class TodoForm {

    constructor(handler = null) {

        this._addItemHandler = handler;

        this._node = getNodeFromTemplate(TEMPLATE, INPUT_BLOCK);
        this._searchBlock = getNodeFromTemplate(SEARCH_TEMPLATE, SEARCH_BLOCK);

        this._addButton = this._node.querySelector(INPUT_BTN_ADD);
        this._input = this._node.querySelector(INPUT_FIELD);

        this._searchField = this._searchBlock.querySelector(SEARCH_FIELD);

        this._addItem = this._addItem.bind(this);
        this._addItemByKeydown = this._addItemByKeydown.bind(this);
        this._search = this._search.bind(this);

        this._addButton.addEventListener("click", this._addItem);
        this._input.addEventListener("keydown", this._addItemByKeydown);
        this._searchField.addEventListener("keyup", this._search);

    }

    _search() {

        this._searchHandler(this._searchField.value);
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

    set searchHandler(handler) {
        this._searchHandler = handler;
    }

    get node() {

        return this._node;
    }

    get searchBlock() {
        return this._searchBlock;
    }

}