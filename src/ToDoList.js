export default function toDoList() {
  const list = [];

  function addToDo(toDoObject) {
    list.push(toDoObject);
    toDoObject.index = list.length - 1;
  }

  function deleteToDo(toDoObject) {
    list.splice(toDoObject.index, 1);
  }

  function editToDo(toDoObject) {
    list.splice(toDoObject.index, 1, toDoObject);
  }
  return {
    list,
    addToDo,
    deleteToDo,
    editToDo,
  };
}
