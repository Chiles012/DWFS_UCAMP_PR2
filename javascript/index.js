import ToDo from './models/todo-model.js'
import ToDoService from './services/todo-service.js'
import UserService from './services/user-service.js'

const todosContainer = document.querySelector('.todos-container');
const selectAssign = document.querySelector('#assign');
const buttonLoggout = document.querySelector('#logout-btn');
const buttonAdd = document.querySelector('#add-todo-btn');
const buttonReload = document.querySelector('#reload');

window.addEventListener('load', () => {
    const user = UserService.getLoggedInUser();

    if (!user) {
        window.location = '/login.html';
    }

    renderUsersInSelect();
    renderToDos();
    
});

buttonReload.addEventListener('click', () => {
    renderToDos();
});

buttonLoggout.addEventListener('click', () => {
    UserService.logout();
    window.location = '/login.html';
});

buttonAdd.addEventListener('click', () => {
    const id = document.querySelector('#id-todo').value;

    if (
        document.querySelector('#title').value.trim() === '' ||
        document.querySelector('#description').value.trim() === '' ||
        document.querySelector('#assign').value === 0
    ) {
        alert('All fields are required');
        return;
    }

    if (id) {
        const title = document.querySelector('#title').value;
        const description = document.querySelector('#description').value;
        const userId = document.querySelector('#assign').value;

        const todo = new ToDo(
            id,
            title,
            description,
            false,
            userId
        );

        ToDoService.updateToDoById(id, todo);

        renderToDos();
    } else {
        const title = document.querySelector('#title').value;
        const description = document.querySelector('#description').value;
        const userId = document.querySelector('#assign').value;

        const todo = new ToDo(
            0,
            title,
            description,
            false,
            userId
        );

        ToDoService.addToDo(todo);

        renderToDos();
    }
});

const renderUsersInSelect = () => {
    const users = getUsers();

    users.forEach(user => {
        const option = document.createElement('option');
        option.value = user.id;
        option.innerText = user.name || user.email;
        selectAssign.appendChild(option);
    });
}

const renderToDos = () => {
    const todos = getToDos();
    todosContainer.innerHTML = '';
    if (todos.length === 0) {
        todosContainer.innerHTML = '<p class="no-todos">No todos found</p>';
    } else {
        todos.forEach(todo => {
            const users = UserService.getUsers();
            const user = users.find(user => user.id == todo.userId);
            const todoDiv = `
            <div class="todo">
                <h3 class="todo-title">${todo.title}</h3>
                <p class="todo-description">${todo.description}</p>
                <p class="todo-assign">
                    <span class="todo-assign-title">Assign to: </span>
                    <span class="todo-assign-username">${user.email}</span>
                </p>
                <div class="todo-actions">
                    <button onclick="todoUpdate(${todo.id})" class="btn btn-edit">Edit</button>
                    <button onclick="todoDelete(${todo.id})" class="btn btn-delete">Delete</button>
                </div>
            </div>
            `;
            todosContainer.insertAdjacentHTML('beforeend', todoDiv);
        });
    }
}

const getToDos = () => {
    const todos = ToDoService.getToDos();
    return todos;
}

const getUsers = () => {
    const users = UserService.getUsers();
    return users;
}
