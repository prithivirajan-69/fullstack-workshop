const taskInput = document.getElementById("taskInput");
const categorySelect = document.getElementById("categorySelect");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const countInfo = document.getElementById("countInfo");
const filterButtons = document.querySelectorAll(".filter");

let todos = JSON.parse(localStorage.getItem("todos")) || [];
let currentFilter = "All";


// Save to localStorage


function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Render Todos


function renderTodos() {
    todoList.innerHTML = "";

    const filteredTodos = todos.filter(todo =>
        currentFilter === "All" || todo.category === currentFilter
    );

    filteredTodos.forEach(todo => {
        const li = document.createElement("li");

        // Checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.completed;

        checkbox.addEventListener("change", () => {
            todo.completed = checkbox.checked;
            saveTodos();
            renderTodos(); //  re-render UI
        });

        // Task text
        const span = document.createElement("span");
        span.textContent = `${todo.text} [${todo.category}]`;

        if (todo.completed) {
            span.style.textDecoration = "line-through";
        }

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.style.marginLeft = "10px";

        deleteBtn.addEventListener("click", () => {
            todos = todos.filter(t => t !== todo); //  correct delete
            saveTodos();
            renderTodos();
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });

    updateCount();
}



// Update Category Count

function updateCount() {
    const workCount = todos.filter(t => t.category === "Work").length;
    const personalCount = todos.filter(t => t.category === "Personal").length;

    countInfo.textContent = `Work: ${workCount} | Personal: ${personalCount}`;
}


// Add Task
addBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();
    if (text === "") return;

    todos.push({
        text,
        category: categorySelect.value,
        completed: false
    });

    taskInput.value = "";
    saveTodos();
    renderTodos();
});



// Filter Tasks

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        currentFilter = btn.dataset.filter;
        renderTodos();
    });
});

// Initial Load

renderTodos();