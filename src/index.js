1/* eslint-disable no-lonely-if */
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

displayProjects(projects);

const container = document.getElementById('container');

// Add an event listener to the project and to-do list buttons
container.addEventListener('click', (event) => {
  if (!event.target.tagName === 'BUTTON') return;

  // Get the id, data attribute, and index of the project in the array
  const btn = event.target;
  if (btn.parentNode.className === 'project') {
    // The project doesn't exist in our list
    const dataTitle = btn.parentNode.getAttribute('data-title');
    if (projects.getListIndex(dataTitle) === -1) return;

    if (btn.id === 'expand') {
      displayToDoList(projects.projectStorage[projects.getListIndex(dataTitle)]);
    } else if (btn.id === 'deleteProjectBtn') {
      if (window.confirm('Do you real want to delete this project?')) {
        projects.deleteList(dataTitle);
        displayProjects(projects);
      }
    }
  } else {
    if (btn.id === 'backBtn') {
      displayProjects(projects);
    } else if (btn === 'editBtn') {

    } else if (btn.id === 'deleteToDoBtn') {
      if (window.confirm('Do you real want to delete this To-Do?')) {
        const title = btn.parentNode.getAttribute('data-todo');
        console.log(title);
        console.log(container.getAttribute('data-list'));
        const currentListTitle = container.getAttribute('data-list');
        const currentList = projects.projectStorage[projects.getListIndex(currentListTitle)];
        console.log(currentList);
        currentList.deleteToDo(title);
        displayToDoList(projects.projectStorage[projects.getListIndex(currentListTitle)]);
      }
    }
  }
});

function handleEdit() {

}
