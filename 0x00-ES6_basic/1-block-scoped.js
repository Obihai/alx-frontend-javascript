export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const newTask = true;
    const newTask2 = false;
    if (newTask && newTask2) {
      return [newTask, newTask2];
    }
  }

  return [task, task2];
}
