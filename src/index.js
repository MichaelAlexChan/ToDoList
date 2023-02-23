/* eslint-disable no-lonely-if */
import toDo from './ToDoObject';
import toDoList from './ToDoList';
import Project from './Project';
import './style.css';
import displayToDoList from './Display/displayToDoList';
import displayProjects from './Display/displayProjects';
import {
  displayToDoModal, displayProjectModal, fillModal, getEntries, closeModal,
} from './Display/displayModal';

const project2 = Project();
displayProjects(project2);

const container = document.getElementById('container');

// Add an event listener to the project and to-do list buttons
document.body.addEventListener('click', (event) => {
  if (!(event.target.tagName === 'BUTTON')) return;

  // Get the id, data attribute, and index of the project in the array
  const btn = event.target;
  if (btn.id === 'newProjectBtn') {
    displayProjectModal();
  } else if (btn.id === 'newToDoBtn') {
    displayToDoModal();
  } else if (btn.id === 'submitProjectBtn') {
    const entries = getEntries();
    project2.addList(toDoList(entries[0]));
    closeModal();
    displayProjects(project2);
  }
  // The project doesn't exist in our list
  let dataTitle;
  if (btn.id === 'expand') {
    dataTitle = btn.parentNode.getAttribute('data-title');
    const projectIndex = project2.getListIndex(dataTitle);
    displayToDoList(project2.projectStorage[projectIndex]);
    console.log(container);
  } else if (btn.id === 'deleteProjectBtn') {
    dataTitle = btn.parentNode.getAttribute('data-title');
    if (window.confirm('Do you real want to delete this project?')) {
      project2.deleteList(dataTitle);
      displayProjects(project2);
    }
  } else {
    let dataToDo;
    if (btn.id === 'backBtn') {
      displayProjects(project2);
    } else if (btn.id === 'editBtn') {
      displayToDoModal('edit');
      dataToDo = btn.parentNode.getAttribute('data-todo');
      const listName = container.getAttribute('data-list');
      const projectIndex = project2.getListIndex(listName);
      fillModal(project2.projectStorage[projectIndex].getToDo(dataToDo));
    } else if (btn.id === 'submitToDoBtn') {
      const toDoProperties = toDo(getEntries());
      const listName = container.getAttribute('data-list');
      const projectIndex = project2.getListIndex(listName);
      if (document.getElementById('modal').getAttribute('data-Modal') === 'editModal') {
        project2.projectStorage[projectIndex].editToDo(toDoProperties);
      } else {
        project2.projectStorage[projectIndex].addToDo(toDoProperties);
      }
      closeModal();
      displayToDoList(project2.projectStorage[projectIndex]);
    } else if (btn.id === 'deleteToDoBtn') {
      if (window.confirm('Do you real want to delete this To-Do?')) {
        const title = btn.parentNode.getAttribute('data-todo');
        const currentListTitle = container.getAttribute('data-list');
        const currentList = project2.projectStorage[project2.getListIndex(currentListTitle)];
        currentList.deleteToDo(title);
        displayToDoList(project2.projectStorage[project2.getListIndex(currentListTitle)]);
      }
    }
  }
});
