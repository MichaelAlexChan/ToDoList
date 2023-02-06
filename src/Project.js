export default function Project() {
  const listStorage = [];

  function addList(list) {
    listStorage.push(list);
    list.index = listStorage.length - 1;
  }

  function deleteList(list) {
    listStorage.splice(list.index, 1);
  }

  return {
    listStorage,
    addList,
    deleteList,
  };
}
