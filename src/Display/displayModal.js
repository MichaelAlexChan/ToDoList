const modal = document.createElement('section');
modal.classList.add('modal', 'hidden');
const overlay = document.createElement('div');
overlay.classList.add('overlay', 'hidden');

function displayModal() {
  const headerDiv = document.createElement('div');
  headerDiv.classList.add('modalHead');

  const header = document.createElement('h2');
  header.innerText = 'Edit To-Do';
  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = 'X';
  closeBtn.setAttribute('id', 'closeModal');
  headerDiv.appendChild(header);
  headerDiv.appendChild(closeBtn);

  const bodyDiv = document.createElement('div');
  bodyDiv.classList.add('modalBody');
  const bodyContent = document.createElement('p');
  bodyContent.innerText = 'This is a test';
  bodyDiv.appendChild(bodyContent);

  const [titleLabel, titleInput] = createLabelAndInput('Title', 'title');
  bodyDiv.appendChild(titleLabel);
  bodyDiv.appendChild(titleInput);
  const [descripLabel, descripInput] = createLabelAndInput('Description', 'description');
  bodyDiv.appendChild(descripLabel);
  bodyDiv.appendChild(descripInput);
  const [dueDateLabel, dueDateInput] = createLabelAndInput('Due Date', 'dueDate');
  bodyDiv.appendChild(dueDateLabel);
  bodyDiv.appendChild(dueDateInput);
  const [priorityLabel, priorityInput] = createLabelAndInput('Priority', 'priority');
  bodyDiv.appendChild(priorityLabel);
  bodyDiv.appendChild(priorityInput);
  const [notesLabel, notesInput] = createLabelAndInput('Notes', 'notes');
  bodyDiv.appendChild(notesLabel);
  bodyDiv.appendChild(notesInput);

  const submitBtn = document.createElement('button');
  submitBtn.innerText = 'Submit';
  submitBtn.setAttribute('id', 'submitBtn');

  modal.appendChild(headerDiv);
  modal.appendChild(bodyDiv);
  modal.appendChild(submitBtn);

  document.querySelector('body').appendChild(modal);
  document.querySelector('body').appendChild(overlay);
  closeBtn.addEventListener('click', (e) => {
    if (e.target.id === 'closeModal') {
      while (modal.firstChild) {
        modal.removeChild(modal.firstChild);
      }
      document.querySelector('body').removeChild(modal);
      document.querySelector('body').removeChild(overlay);
    }
  });
}

function fillModal(toDo) {
  for (const property in toDo) {
    console.log(`${property}: ${toDo[property]}`);
    const input = document.getElementById(property);
    input.setAttribute('value', `${toDo[property]}`);
  }
}

function createLabelAndInput(inputLabel, inputId) {
  const label = document.createElement('label');
  label.setAttribute('for', inputId);
  label.textContent = inputLabel;

  const input = document.createElement('input');
  input.setAttribute('id', inputId);
  input.setAttribute('name', inputId);

  let type;
  if (inputId === 'dueDate') {
    type = 'date';
  } else {
    type = 'text';
  }
  input.setAttribute('type', type);
  return [label, input];
}
export { displayModal, fillModal };
