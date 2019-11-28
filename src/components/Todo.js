import "../style.css";
import TodoList from './TodoList.js';
import TodoListItem from './TodoListItem.js';
import TodoForm from "./TodoForm.js";
import { getCounter } from "../services/api";

export default class Todo {

    constructor(block) {


        this._block = block;
        this._todoForm = new TodoForm();
        this._todoList = new TodoList();

        this._todoForm.addItemHandler = value => this._todoList.add(new TodoListItem({ value }, (getCounter() + 1)));
        this._todoForm.searchHandler = value => this._todoList.updateSearchList({ value });

        this._todoList._node.addEventListener('scroll', () => this._load());

        this._display();

    }

    _display() {

        this._block.append(this._todoForm.node);
        this._block.append(this._todoForm.searchBlock);
        this._todoList.loadGroupOfItems(this._todoList.items.slice(0, 19));
        this._block.append(this._todoList.node);
    }
    _load() {
        this._todoList.loadList();
    }

}