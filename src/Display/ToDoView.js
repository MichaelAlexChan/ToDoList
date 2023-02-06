export default function displayToDoList(listObject) {
  console.log('hii');
  const pageDisplay = document.getElementById('container');
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
}
