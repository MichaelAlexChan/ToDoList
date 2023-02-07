import toDo from './ToDoObject';
import toDoList from './ToDoList';
import Project from './Project';
import './style.css';
import displayToDoList from './Display/displayToDoList';
import displayProjects from './Display/displayProjects';

const object1 = toDo('wash dishes', 'wash the darn dishes', 'today', 'high', 'you can use the dishwasher');
const object2 = toDo('eat protein', 'gotta get 100g of protein', 'today', 'high', 'protein from foods preferred');
const listObject = toDoList('mylist');
listObject.addToDo(object1);
listObject.addToDo(object2);
const projects = Project();
projects.addList(listObject);
console.log(projects);

// displayToDoList(listObject);
displayProjects(projects);

const container = document.getElementById('container');

container.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const btn = event.target.id;
    if (btn === 'expand') {
      console.log(projects.projectStorage);
      console.log(listObject.index);
      displayToDoList(projects.projectStorage[listObject.index]);
    }
    if (btn === 'backBtn') {
      displayProjects(projects);
    }
  }
});
