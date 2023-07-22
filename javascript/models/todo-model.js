import BaseModel from "./base-model.js";

export default class ToDo extends BaseModel {

    id = 0;
    title = '';
    description = '';
    completed = false;
    userId = 0;

    constructor(id, title, description, completed, userId) {
        super();
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
        this.userId = userId;
    }

    get id() {
        return this.id;
    }

    set id(id) {
        this.id = id;
    }

    get title() {
        return this.title;
    }

    set title(title) {
        this.title = title;
    }

    get description() {
        return this.description;
    }

    set description(description) {
        this.description = description;
    }

    get completed() {
        return this.completed;
    }

    set completed(completed) {
        this.completed = completed;
    }

    get user() {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        return users.find(user => user.id === this.userId);
    }

    set user(user) {
        this.userId = user.id;
    }

}