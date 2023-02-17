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
  const bodyContent = document.createElement('p');
  bodyContent.innerText = 'This is a test';
  bodyDiv.appendChild(bodyContent);
  const titleLabel = document.createElement('label');
  titleLabel.setAttribute('for', 'titleInput');
  const titleInput = document.createElement('input');
  titleInput.setAttribute('id', 'titleInput');
  description,
  dueDate,
  priority,
  notes,

  modal.appendChild(headerDiv);
  modal.appendChild(bodyDiv);
  document.querySelector('body').appendChild(modal);
  document.querySelector('body').appendChild(overlay);
  closeBtn.addEventListener('click', (e) => {
    if (e.target.id === 'closeModal') {
      headerDiv.removeChild(header);
      headerDiv.removeChild(closeBtn);
      bodyDiv.removeChild(bodyContent);
      document.querySelector('body').removeChild(modal);
      document.querySelector('body').removeChild(overlay);
    }
  });
}

function fillModal(toDo) {

}

export { displayModal, fillModal };
