export default function displayToDoList(listObject) {
  const pageDisplay = document.getElementById('container');
  while (pageDisplay.firstChild) {
    pageDisplay.removeChild(pageDisplay.firstChild);
  }

  // Create the subheading and back button for the project
  const headingDiv = document.createElement('div');
  headingDiv.classList.add('toDoHead');

  const headingBackBtn = document.createElement('button');
  headingBackBtn.innerText = 'back to Projects';
  headingBackBtn.setAttribute('id', 'backBtn');
  headingDiv.appendChild(headingBackBtn);

  const headingText = document.createElement('h2');
  headingText.innerText = `Project: ${listObject.title}`;
  headingText.setAttribute('id', 'headingText');
  headingDiv.appendChild(headingText);
  pageDisplay.appendChild(headingDiv);

  const labelDiv = document.createElement('div');
  labelDiv.classList.add('labelDiv');

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
