const addForm = document.querySelector('.add');
const ul = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTodoTemplate = (todo) => {
    const html = `
    <li class="text-light list-group-item d-flex justify-content-between align-item-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;

    ul.innerHTML += html;
}

// add todo to list 
addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    // console.log(todo);
    if (todo.length) {
        generateTodoTemplate(todo);
        addForm.reset();
    }
});

// delete todo form list 
ul.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});


const filterTodos = (term) => {
    Array.from(ul.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add('filtered'));

    Array.from(ul.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.remove('filtered'));
};
// serch fnc
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
})