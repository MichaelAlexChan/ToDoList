export default function toDo([title, description, dueDate, priority, notes]) {
  return {
    title,
    description,
    dueDate,
    priority,
    notes,
  };
}
