const hello = () => {
  const container = document.getElementById('container');
  const header = document.createElement('h1');
  header.textContent = 'Hello';
  container.appendChild(header);

  document.appendChild(container);
};

hello();
