export default function displayToDoList(listObject) {
  const pageDisplay = document.getElementById('container');
  pageDisplay.setAttribute('data-list', listObject.title);
  while (pageDisplay.firstChild) {
    pageDisplay.removeChild(pageDisplay.firstChild);
  }

  const containerControl = document.getElementsByClassName('containerBtn');
  containerControl[0].setAttribute('id', 'newToDoBtn');
  containerControl[0].innerText = 'New To-Do';

  // Create the subheading and back button for the project
  const headingDiv = document.createElement('div');
  headingDiv.classList.add('toDoHead');

  // Add a button to our subheading, takes us back to the project page
  const headingBackBtn = document.createElement('button');
  headingBackBtn.innerText = 'back to Projects';
  headingBackBtn.setAttribute('id', 'backBtn');
  headingDiv.appendChild(headingBackBtn);

  // Creates a subheading for the list
  const headingText = document.createElement('h2');
  headingText.innerText = `Project: ${listObject.title}`;
  headingText.setAttribute('id', 'headingText');
  headingDiv.appendChild(headingText);
  pageDisplay.appendChild(headingDiv);

  // Adds each To-Do item to the display
  listObject.list.forEach((element) => {
    const toDoDiv = document.createElement('div');
    toDoDiv.classList.add('listObject');
    toDoDiv.setAttribute('data-todo', element.title);

    const name = document.createElement('h3');
    name.innerText = `To-Do: ${element.title}`;
    toDoDiv.appendChild(name);

    const description = document.createElement('p');
    description.innerText = `Description: ${element.description}`;
    toDoDiv.appendChild(description);

    const date = document.createElement('p');
    date.innerText = `Due date: ${element.dueDate}`;
    toDoDiv.appendChild(date);

    const priority = document.createElement('p');
    priority.innerText = `Priority: ${element.priority}`;
    toDoDiv.appendChild(priority);

    const notes = document.createElement('p');
    notes.innerText = `Notes: ${element.notes}`;
    toDoDiv.appendChild(notes);

    const editBtn = document.createElement('button');
    editBtn.setAttribute('id', 'editBtn');
    editBtn.innerText = 'Edit';
    toDoDiv.appendChild(editBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.setAttribute('id', 'deleteToDoBtn');
    toDoDiv.appendChild(deleteBtn);

    pageDisplay.appendChild(toDoDiv);
  });
}
