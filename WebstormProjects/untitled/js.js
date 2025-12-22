const input = document.querySelector('#todo-input');
const addBtn = document.querySelector('#add-btn');
const todoList = document.querySelector('#todo-list');
addBtn.addEventListener('click', () => {
    const taskText = input.value;

    if (taskText !== "") {
        // Create the <li> element
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn">Remove</button>
        `;

        // Append to the list
        todoList.appendChild(li);

        // Clear input for next task
        input.value = "";
    } else {
        alert("Please enter a task!");
    }
});
