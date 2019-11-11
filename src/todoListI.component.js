import {
    INPUT_LIST,
} from './const.js';

export function getTodoList() {
    const templateList = `<div class="input-list"></div>`;
    return new DOMParser()
        .parseFromString(templateList, "text/html")
        .querySelector(INPUT_LIST);
}