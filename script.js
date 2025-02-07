document.getElementById("addTaskBtn").addEventListener("click", function () {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();

  if (taskText !== "") {
    let taskList = document.getElementById("taskList");

    let listItem = document.createElement("li");
    listItem.innerHTML = `
            <span class="task-text">${taskText}</span>
            <button class="done-btn">✔</button>
            <button class="delete-btn">✖</button>
        `;

    taskList.appendChild(listItem);
    taskInput.value = "";

    updateTaskCounter();

    listItem.querySelector(".done-btn").addEventListener("click", function () {
      listItem.querySelector(".task-text").classList.toggle("done");
    });

    listItem
      .querySelector(".delete-btn")
      .addEventListener("click", function () {
        listItem.remove();
        updateTaskCounter();
      });
  }
});

function updateTaskCounter() {
  let taskCount = document
    .getElementById("taskList")
    .getElementsByTagName("li").length;
  document.getElementById("taskCounter").textContent = taskCount;
}
