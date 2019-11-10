const templateItem = `<div class="input-list-item"><div class="input-list-text"></div><button class="input-list-btn-remove">Remove</button></div>`;
const templateList = `<div class="input-list"></div>`
export function getTodoListItem() {
    return new DOMParser()
        .parseFromString(templateItem, "text/html")
}
export function getTodoList() {
    return new DOMParser()
        .parseFromString(templateList, "text/html")
}