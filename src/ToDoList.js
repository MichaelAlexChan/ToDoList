export default function toDoList(title) {
  const list = [];

  function getToDoIndex(toDoTitle) {
    return list.findIndex((element) => element.title === toDoTitle);
  }

  function getToDo(toDoTitle) {
    return list[getToDoIndex(toDoTitle)];
  }

  function addToDo(toDoObject) {
    list.push(toDoObject);
    toDoObject.index = list.length - 1;
  }

  function deleteToDo(toDoTitle) {
    list.splice(getToDoIndex(toDoTitle), 1);
  }

  function editToDo(toDoObject) {
    if (list.splice(toDoObject.index, 1, toDoObject)) {
      console.log('true');
    }
  }

  return {
    title,
    list,
    addToDo,
    deleteToDo,
    editToDo,
    getToDoIndex,
    getToDo,
  };
}
