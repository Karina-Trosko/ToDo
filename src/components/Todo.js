import "../style.css";
import {
    INPUT_FIELD,
    INPUT_BTN_ADD,
    INPUT_LIST,

} from '../const.js';
import TodoList from './TodoList.js';
import TodoListItem from './TodoListItem.js';
import TodoForm from "./TodoForm.js";
import { getAll, getCounter } from "../services/api";

export default class Todo {

    constructor(block) {


        this._block = block;
        this._todoForm = new TodoForm();
        this._todoList = new TodoList();

        this._todoForm.addItemHandler = value => this._todoList.add(new TodoListItem({ value }, (getCounter() + 1)));
        this._load();
        this._display();

    }

    _display() {

        this._block.append(this._todoForm.node);
        this._block.append(this._todoList.node);
    }

    _load() {

        let items = this._todoList.items;
        items.forEach(item => this._todoList.loadItem(new TodoListItem(item, item.id)));
    }
}