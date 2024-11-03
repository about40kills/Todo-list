const todoList = [{
    name: 'write auth', 
    dueDate: `2024-09-23`
},{
    name: 'do a lil ts',
    dueDate: `2024-09-23`}
];

renderTodoList();

function renderTodoList(){
    let todoListHTML = ``;

    todoList.forEach((todoObject, index) => {
        const {name,dueDate} = todoObject; 
        const html = 
        `<div>${name}</div>
        <div>${dueDate}</div> 
        <button 
            class = "delete-button js-delete-todo">Delete</button>
        `;
        todoListHTML += html;
    });
    
document.querySelector(`.todo-list`)
    .innerHTML = todoListHTML;

document.querySelectorAll(`.js-delete-todo`)
    .forEach((deleteButton, index) => {
        deleteButton.addEventListener(`click`, () => {
            todoList.splice(index,1);
            renderTodoList();
        });
    });
}

document.querySelector(`.js-add-todo`)
    .addEventListener(`click`, () => {
        addTodo();
    });

function addTodo(){
    const inputElement = document.querySelector(`.input`);
    const name = inputElement.value;

    const dateInputElement = document.querySelector(`.due-date`)
    const dueDate = dateInputElement.value;
    
    todoList.push({
        name,
        dueDate})


    inputElement.value = ``;

    renderTodoList();
}

function handleAddKeyDown(){
    if(event.key === `Enter`){
        addTodo();
    }
}