export default function Projects() {
  const projectStorage = [];

  function addList(list) {
    projectStorage.push(list);
    list.index = projectStorage.length - 1;
  }

  function deleteList(list) {
    projectStorage.splice(list.index, 1);
  }

  return {
    projectStorage,
    addList,
    deleteList,
  };
}
