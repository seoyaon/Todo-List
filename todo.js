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
    const deleteAll = document.querySelector('.delete-btn-wrap');

    newLi.appendChild(newBtn);
    newLi.appendChild(newSpan);
    // console.log(newLi)

    newSpan.textContent = todoInput.value;

    todoList.appendChild(newLi);
    // console.log(todoList)

    todoInput.value = '';

    newBtn.addEventListener('click', () => {
        newLi.classList.toggle('complete');

        saveItemsFn();
    });

    newLi.addEventListener('dblclick', () => {
        newLi.remove();
    });

    saveItemsFn();
};

function deleteAll() { // 전체 삭제 버튼
    const liList = document.querySelectorAll('#todoList li');
    // console.log(liList[0])
    for ( let i = 0; i < liList.length; i++){
        liList[i].remove();
        // console.log(liList[i])
    }
}

function saveItemsFn () { // 로컬에 데이터 저장하기
    const saveItems = [];
    for (let i = 0; i < todoList.children.length; i++){
        const todoObj = {
            contents: todoList.children[i].querySelector('span').textContent,
            complete: todoList.children[i].classList.contains('complete')
        };
        saveItems.push(todoObj);
    }
    console.log(JSON.stringify(saveItems))
}
