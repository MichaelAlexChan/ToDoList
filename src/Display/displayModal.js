const modal = document.createElement('section');
modal.classList.add('modal', 'hidden');
const overlay = document.createElement('div');
overlay.classList.add('overlay', 'hidden');

function displayModal(toDo) {
    const headerDiv = document.createElement('div');
    header.classList.add('modalHead');
    const header = document.createElement('h2');
    header.innerText = 'Edit To-Do'
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = 'X';
    headerDiv.appendChild(header);
    headerDiv.appendChild(closeBtn);

    const bodyDiv = document.createElement('div');
    const bodyContent = document.createElement('p');
    bodyContent.innerText = "This is a test"
    bodyDiv.appendChild(bodyContent);

    modal.appendChild(headerDiv);
    modal.appendChild(bodyDiv);
}

function hideModal() {

}