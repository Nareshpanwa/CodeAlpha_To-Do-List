function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  // Mark as done
  li.addEventListener("click", function () {
    li.classList.toggle("done");
  });

  // Delete button
  const span = document.createElement("span");
  span.textContent = "❌";
  span.addEventListener("click", function (e) {
    e.stopPropagation(); // prevent strike-through
    li.remove();
  });

  li.appendChild(span);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
