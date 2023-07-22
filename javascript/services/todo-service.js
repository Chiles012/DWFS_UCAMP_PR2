export default class ToDoService {

    static getToDos() {
        const toDos = localStorage.getItem('toDos');
        return toDos ? JSON.parse(toDos) : [];
    }

    static getToDosByUser(userId) {
        const toDos = this.getToDos();
        return toDos.filter(toDo => toDo.userId === userId);
    }

    static getToDoById(id) {
        const toDos = this.getToDos();
        return toDos.find(toDo => toDo.id === id);
    }

    static addToDo(todo) {
        const toDos = this.getToDos();
        const id = toDos.length + 1;
        todo.id = id;
        localStorage.setItem('toDos', JSON.stringify(toDos));
    }

    static updateToDoById(id, todo) {
        const toDos = this.getToDos();
        const index = toDos.findIndex(toDo => toDo.id == id);
        console.log(index);
        toDos[index] = todo;

        localStorage.setItem('toDos', JSON.stringify(toDos));
    }

    static deleteToDoById(id) {
        const toDos = this.getToDos();
        const index = toDos.findIndex(toDo => toDo.id === id);
        toDos.splice(index, 1);
        localStorage.setItem('toDos', JSON.stringify(toDos));
    }

}