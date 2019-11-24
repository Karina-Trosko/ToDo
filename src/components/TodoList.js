import {
    INPUT_LIST,
} from '../const.js';
import { templateList } from '../templates/TodoList.js';
import { getNodeFromTemplate } from '../services/utils.js';


export default class TodoList {

    constructor() {

        this._node = getNodeFromTemplate(templateList, INPUT_LIST);
        this._items = [];

    }

    add(item) {

        this._items = [...this._items, item];

        this.removeById = this.removeById.bind(this);
        item.removeHandler = this.removeById;

        this._node.append(item.node);

    }
    removeById(id) {

        const removedItem = this._items.find(el => el.id === id);
        this._items = this._items.filter(el => el.id !== id);
        removedItem._node.remove();
    }

    get node() {

        return this._node;

    }
    get items() {
        return this._items;
    }
}