import {
    INPUT_LIST,
    INPUT_LIST_ITEM,

} from './const.js'



const templateItem = `<div class="input-list-item">
                        <div class="input-list-text"></div>
                        <button class="input-list-btn-remove">Remove</button>
                        </div>`;
const templateList = `<div class="input-list"></div>`
export function getTodoListItem() {
    return new DOMParser()
        .parseFromString(templateItem, "text/html").querySelector(INPUT_LIST_ITEM);
}
export function getTodoList() {
    return new DOMParser()
        .parseFromString(templateList, "text/html").querySelector(INPUT_LIST);
}