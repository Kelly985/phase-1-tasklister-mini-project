document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", (tasks) => {
    tasks.preventDefault();
    const enteredTask = document.createElement("li");
    const taskEntry = document.getElementById("new-task-description");

    enteredTask.innerText = taskEntry.value;
    taskList.appendChild(enteredTask);
    taskEntry.value = "";
  });
});

