export default function displayProjects(projects) {
  const pageDisplay = document.getElementById('container');
  while (pageDisplay.firstChild) {
    pageDisplay.removeChild(pageDisplay.firstChild);
  }
  projects.projectStorage.forEach((element) => {
    const projectDisplay = document.createElement('div');
    projectDisplay.classList.add('project');

    const name = document.createElement('h3');
    name.innerText = element.title;
    projectDisplay.appendChild(name);

    const expand = document.createElement('button');
    expand.setAttribute('id', 'expand');
    expand.innerText = 'View Project';
    projectDisplay.appendChild(expand);

    const deleteProject = document.createElement('button');
    deleteProject.setAttribute('id', 'delete');
    deleteProject.innerText = 'Delete Project';
    projectDisplay.appendChild(deleteProject);

    pageDisplay.appendChild(projectDisplay);
  });
}
