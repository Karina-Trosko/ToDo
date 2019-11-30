const LOCAL_STORAGE_TODO = "LOCAL_STORAGE_TODO";
const COUNTER = "COUNTER";

export function getAll() {

    let items = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TODO));
    if (!Array.isArray(items)) items = [];

    return items;
}

export function save(items) {

    localStorage.setItem(LOCAL_STORAGE_TODO, JSON.stringify(items));
}

export function removeByIdFromStorage(id) {

    let items = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TODO));
    localStorage.setItem(LOCAL_STORAGE_TODO, JSON.stringify(items.filter(item => item.id !== Number(id))));


}

export function getCounter() {

    let cntr = localStorage.getItem(COUNTER);

    if (cntr === null || (getAll().length === 0)) {
        localStorage.setItem(COUNTER, 0);
        return 0;
    } else return Number(cntr);

}

export function setCounter(value) {

    localStorage.setItem(COUNTER, (value));
}