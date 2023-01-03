const addBtn = document.querySelector('#addBtn');

function keyCodeCheck () {
	// console.log(window.event)

	if(window.event.keyCode === 13 && todoInput.value !== ''){
        createTodo();
    }
}

addBtn.addEventListener('click', () => {
    if(todoInput.value !== ''){
        createTodo();
    }
});

function createTodo () {
    const todoList = document.querySelector('#todoList');
    const newLi = document.createElement('li');
    const newBtn = document.createElement('button');
    const newSpan = document.createElement('span');
    const todoInput = document.querySelector('#todoInput');

    newLi.appendChild(newBtn);
    newLi.appendChild(newSpan);
    // console.log(newLi)

    newSpan.textContent = todoInput.value;

    todoList.appendChild(newLi);
    // console.log(todoList)

    todoInput.value = '';
};