import toDo from './ToDoObject';
import toDoList from './ToDoList';
import './style.css';

const object1 = toDo('wash dishes', 'wash the darn dishes', 'today', 'high', 'you can use the dishwasher');
const object2 = toDo('eat protein', 'gotta get 100g of protein', 'today', 'high', 'protein from foods preferred');
const listObject = toDoList();
listObject.addToDo(object1);
listObject.addToDo(object2);

const pageDisplay = document.getElementById('container');

// Displays all To-Do Lists in the page container
const displayLists = () => {
  listObject.list.forEach((element) => {
    const toDoDiv = document.createElement('div');
    toDoDiv.classList.add('listObject');

    const name = document.createElement('h3');
    name.innerText = element.title;
    toDoDiv.appendChild(name);

    const description = document.createElement('p');
    description.innerText = element.description;
    toDoDiv.appendChild(description);

    const date = document.createElement('p');
    date.innerText = element.dueDate;
    toDoDiv.appendChild(date);

    const priority = document.createElement('p');
    priority.innerText = element.priority;
    toDoDiv.appendChild(priority);

    const notes = document.createElement('p');
    notes.innerText = element.dueDate;
    toDoDiv.appendChild(notes);

    pageDisplay.appendChild(toDoDiv);
  });
};

displayLists();
