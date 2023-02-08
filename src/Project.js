export default function Projects() {
  const projectStorage = [];

  function addList(list) {
    projectStorage.push(list);
    list.index = projectStorage.length - 1;
  }

  function deleteList(listtitle) {
    const index = projectStorage.findIndex((element) => element.title === listtitle);
    projectStorage.splice(index, 1);
  }

  return {
    projectStorage,
    addList,
    deleteList,
  };
}
