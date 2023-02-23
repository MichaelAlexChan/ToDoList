/* eslint-disable no-use-before-define */
const modal = document.createElement('section');
modal.classList.add('modal', 'hidden');
modal.setAttribute('id', 'modal');
const overlay = document.createElement('div');
overlay.classList.add('overlay', 'hidden');

// Display an empty to-do modal with inputs and labels - allows for submission and close
function displayToDoModal(type) {
  const headerDiv = document.createElement('div');
  headerDiv.classList.add('modalHead');

  const header = document.createElement('h2');
  if (type === 'edit') {
    header.innerText = 'Edit To-Do';
    modal.setAttribute('data-Modal', 'editModal');
  } else {
    header.innerText = 'New To-Do';
    modal.setAttribute('data-Modal', 'newModal');
  }
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
  submitBtn.setAttribute('id', 'submitToDoBtn');

  modal.appendChild(headerDiv);
  modal.appendChild(bodyDiv);
  modal.appendChild(submitBtn);

  document.querySelector('body').appendChild(modal);
  document.querySelector('body').appendChild(overlay);
  closeBtn.addEventListener('click', (e) => {
    if (e.target.id === 'closeModal') {
      closeModal();
    }
  });
}

function displayProjectModal() {
  const headerDiv = document.createElement('div');
  headerDiv.classList.add('modalHead');

  const header = document.createElement('h2');
  header.innerText = 'New Project';
  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = 'X';
  closeBtn.setAttribute('id', 'closeModal');
  headerDiv.appendChild(header);
  headerDiv.appendChild(closeBtn);

  const bodyDiv = document.createElement('div');
  bodyDiv.classList.add('modalBody');

  const [titleLabel, titleInput] = createLabelAndInput('Title', 'title');
  bodyDiv.appendChild(titleLabel);
  bodyDiv.appendChild(titleInput);

  const submitBtn = document.createElement('button');
  submitBtn.innerText = 'Submit';
  submitBtn.setAttribute('id', 'submitProjectBtn');

  modal.appendChild(headerDiv);
  modal.appendChild(bodyDiv);
  modal.appendChild(submitBtn);

  document.querySelector('body').appendChild(modal);
  document.querySelector('body').appendChild(overlay);
  closeBtn.addEventListener('click', (e) => {
    if (e.target.id === 'closeModal') {
      closeModal();
    }
  });
}

// Fills modal with values from a to-do item
function fillModal(toDo) {
  const entries = Object.entries(toDo);
  entries.forEach(([key, value]) => {
    if (key === 'index') {
      return;
    }
    const input = document.getElementById(key);
    input.setAttribute('value', `${value}`);
  });
}

// Closes the modal
function closeModal() {
  while (modal.firstChild) {
    modal.removeChild(modal.firstChild);
  }
  document.querySelector('body').removeChild(modal);
  document.querySelector('body').removeChild(overlay);
}

// Returns the entries in the input boxes
function getEntries() {
  const properties = [];
  const inputs = modal.getElementsByTagName('input');
  for (let i = 0; i < inputs.length; i += 1) {
    properties.push(inputs[i].value);
  }
  return properties;
}

// Function to loop and create input & label elements
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
export {
  displayToDoModal, displayProjectModal, fillModal, getEntries, closeModal,
};
