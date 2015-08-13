"use strict";

require("./todo-list.scss");

// ES6: Class
class TodoListCtrl {
  constructor() {
    this.todoList = document.querySelector(".todo-list");
    this.lastIndex = 0;
  }
  addTodo (content, fnDelete = () => {}) {
    let index = ++this.lastIndex

    let todoItem = document.createElement("li");
    todoItem.classList.add("todo-list__item");
    todoItem.dataset.index = index;

    let todoItemOrder = document.createElement("span");
    // ES6: Template literal
    todoItemOrder.innerHTML = `#${index}`;
    todoItemOrder.classList.add("todo-list__item__order");
    todoItem.appendChild(todoItemOrder);

    let todoItemContent = document.createElement("span");
    todoItemContent.innerHTML = content;
    todoItemContent.classList.add("todo-list__item__content");
    todoItem.appendChild(todoItemContent);

    let todoItemButtons = document.createElement("span");
    todoItemButtons.classList.add("todo-list__item__buttons");
    todoItem.appendChild(todoItemButtons);

      let todoItemDelete = document.createElement("button");
      todoItemDelete.innerHTML = "Usuń";
      todoItemDelete.classList
        .add("todo-list__item__delete", "btn", "btn-warning");
      // set up click listener on delete
      todoItemDelete.addEventListener("click", () => {
        // fnDelete must return false to cancel default behaviour
        if (fnDelete(index) !== false) this.todoList.removeChild(todoItem);
      });
      todoItemButtons.appendChild(todoItemDelete);

    this.todoList.appendChild(todoItem);
  }
  removeTodo(context_index) {
    for (let i = 0; i < this.todoList.childNodes.length; i++) {
      if(this.todoList.childNodes[i].dataset.index == context_index) {
        this.todoList.removeChild(this.todoList.childNodes[i]);
      }
    }
  }
}

export default TodoListCtrl;
