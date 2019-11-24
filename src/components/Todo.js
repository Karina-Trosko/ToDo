import "../style.css";
import {
    INPUT_FIELD,
    INPUT_BTN_ADD,
    INPUT_LIST,

} from '../const.js';
import TodoList from './TodoList.js';
import TodoListItem from './TodoListItem.js';
import TodoForm from "./TodoForm.js";

export default class Todo {

    constructor(block) {
        this._idCounter = 0;
        this._block = block;
        this._todoForm = new TodoForm();
        this._todoList = new TodoList();

        this._todoForm.addItemHandler = value => this._todoList.add(new TodoListItem({ value }, this._idCounter++));
        this._load();
        this._display();

    }

    _display() {
        this._block.append(this._todoForm.node);
        this._block.append(this._todoList.node);
    }
    _load() {
        let items = [];
        items.forEach(item => this._todoList.add(new TodoListItem({ value: item.value })));
    }
}