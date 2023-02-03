import toDo from './ToDoObject';
import toDoList from './ToDoList';

const hello = () => {
  const container = document.getElementById('container');
  const header = document.createElement('h1');
  header.textContent = 'Bonjour';
  container.appendChild(header);

  document.body.appendChild(container);
};

hello();

const object1 = toDo('wash dishes', 'wash the darn dishes', 'today', 'high', 'you can use the dishwasher');
console.log(object1);
const listObject = toDoList();
listObject.addToDo(object1);
console.log(listObject);

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
