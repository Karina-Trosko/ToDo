import {
    INPUT_LIST,
    INPUT_LIST_ITEM_BTN_REMOVE,
} from '../const.js';
import { templateList } from '../templates/TodoList.js';
import { getNodeFromTemplate } from '../services/utils.js';
import { save, getAll, removeByIdFromStorage, setCounter } from '../services/api.js';
import TodoListItem from './TodoListItem.js';

export default class TodoList {

    constructor() {

        this._node = getNodeFromTemplate(templateList, INPUT_LIST);

        this._items = getAll();

        this.removeById = this.removeById.bind(this);

        this._indexStart = 19;
        this._indexEnd = 29;

    }

    add(item) {

        this._items = [...this._items, item];

        this.loadItem(item);
        let data = this._items.map(item => ({ value: item.value, id: item.id }));

        save(data);
        setCounter(item.id);
    }

    loadItem(item) {

        item.removeHandler = this.removeById;
        this._node.append(item.node);
    }

    removeById(id) {

        const removedItem = this._items.find(el => el.id === id);
        this._items = this._items.filter(el => el.id !== id);

        document.querySelector("#i" + id).remove();
        removeByIdFromStorage(id);

    }
    loadList() {

        if (this._node.scrollHeight - (this._node.scrollTop + this._node.clientHeight) < 5) {

            this.loadGroupOfItems(this._items.slice(this._indexStart, this._indexEnd));

            this._indexStart = this._indexEnd;
            this._indexEnd += 10;
        }
    }

    loadGroupOfItems(arr) {

        arr.forEach(item => this.loadItem(new TodoListItem(item, item.id)));
    }

    get node() {

        return this._node;

    }
    get items() {
        return this._items;
    }
}