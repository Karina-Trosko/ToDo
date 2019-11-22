import "../style.css";
import {
    INPUT_FIELD,
    INPUT_BTN_ADD,
    INPUT_LIST,

} from '../const.js';
import TodoList from './TodoList';
import TodoListItem from './TodoListItem';

export default class Todo {

    constructor(block) {

        block.append(new TodoList().list);

        block.querySelector(INPUT_BTN_ADD).addEventListener("click", Todo.addItem);
        block.querySelector(INPUT_FIELD).addEventListener("keydown", Todo.addItemByKeydown);
    }

    static addItem() {

        const inputField = document.querySelector(INPUT_FIELD);
        const listItem = new TodoListItem(inputField).item;
        inputField.value = "";
        document.querySelector(INPUT_LIST).append(listItem);
    }

    static addItemByKeydown(eventOfItem) {

        if (Number(eventOfItem.keyCode) === 13) { Todo.addItem(); }
    }
}