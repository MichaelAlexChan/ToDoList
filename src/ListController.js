import toDo from './ToDoObject';
import toDoList from './ToDoList';

// Create our list to store To-Do objects
const listObject = toDoList();
const pageDisplay = document.getElementById('container');

const displayLists = () => {
  listObject.list.forEach((element) => {
    const toDoDiv = document.createElement('div');
    const toDoName = document.createElement('h3');
    toDoName.innerText = element.title;
    toDoDiv.appendChild(toDoName);

    pageDisplay.appendChild(toDoDiv);
  });
};

displayLists();
