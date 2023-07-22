import BaseModel from "./base-model.js";

export default class User extends BaseModel {

    id = 0;
    name = '';
    email = '';
    password = '';

    constructor(id, name, email, password) {
        super();
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }

    get id() {
        return this.id;
    }

    set id(id) {
        this.id = id;
    }

    get name() {
        return this.name;
    }

    set name(name) {
        this.name = name;
    }

    get email() {
        return this.email;
    }

    set email(email) {
        this.email = email;
    }

}