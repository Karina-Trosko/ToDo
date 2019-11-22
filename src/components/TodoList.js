import {
    INPUT_LIST,
} from '../const.js';
import { templateList } from '../templates/TodoList.js';
import { getNodeFromTemplate } from '../services/utils.js';


export default class TodoList {

    constructor() {

        this._list = getNodeFromTemplate(templateList, INPUT_LIST);

    }

    get list() {

        return this._list;

    }
}