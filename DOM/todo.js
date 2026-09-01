
const taskInput = document.getElementById("taskinput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("tasklist");

let tasks = [];
let taskIdCounter = 1;

function render() {
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.classList.add("task-item");

    const span = document.createElement("span");
    span.classList.add("task-text");
    span.textContent = task.text;
    span.style.textDecoration = task.completed ? "line-through" : "none";

    const btnWrapper = document.createElement("span");
    btnWrapper.classList.add("task-button");

    const completeBtn = document.createElement("button");
    completeBtn.type = "button";
    completeBtn.textContent = task.completed ? "↩️" : "✅";
    completeBtn.addEventListener("click", () => {
      task.completed = !task.completed;
      render();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.textContent = "❌";
    deleteBtn.addEventListener("click", () => {
      tasks = tasks.filter((item) => item.id !== task.id);
      render();
    });

    btnWrapper.append(completeBtn, deleteBtn);
    li.append(span, btnWrapper);
    taskList.appendChild(li);
  });
}

function addTask() {
  const taskText = taskInput.value.trim();
  if (!taskText) {
    return;
  }

  tasks.push({
    id: taskIdCounter++,
    text: taskText,
    completed: false,
  });

  taskInput.value = "";
  taskInput.focus();
  render();
}

// addBtn.addEventListener("click", addTask);
// taskInput.addEventListener("keydown", (event) => {
//   if (event.key === "Enter") {
//     addTask();
//   }
// });


let var = "hellwo world"

console.log(var;
  
)

ul>li*10}
