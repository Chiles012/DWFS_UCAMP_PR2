import User from '../models/user-model.js';

export default class UserService {

    static login(email, password) {
        const users = JSON.parse(localStorage.getItem('users')) || [];

        const user = users.find(user => user.email === email);

        if (!user) {
            throw new Error('User not found');
        }

        if (user && user.password === password) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            throw new Error('Invalid credentials');
        }

    }

    static getLoggedInUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

    static logout() {
        localStorage.removeItem('user');
    }

    static register(name, email, password) {
        const users = JSON.parse(localStorage.getItem('users')) || [];

        const user = users.find(user => user.email === email);

        if (user) {
            throw new Error('User already exists');
        } else {
            const id = users.length + 1;
            console.log(id);
            const user = new User(id, name, email, password);
            console.log(user);
            console.log(user.toJson());
            users.push(user.toJson());
            localStorage.setItem('users', JSON.stringify(users));
        }
    }

    static getUsers() {
        const users = localStorage.getItem('users');
        return users ? JSON.parse(users) : [];
    }

}