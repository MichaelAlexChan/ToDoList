export default function Projects() {
  const projectStorage = [];

  function getListIndex(listTitle) {
    return projectStorage.findIndex((element) => element.title === listTitle);
  }

  function addList(list) {
    projectStorage.push(list);
  }

  function deleteList(listTitle) {
    projectStorage.splice(getListIndex(listTitle), 1);
  }

  return {
    projectStorage,
    addList,
    deleteList,
    getListIndex,
  };
}
