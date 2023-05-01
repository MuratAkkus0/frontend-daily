// Select Varaibles
const input = document.querySelector('#add-task');
const addBtn = document.querySelector('#add-btn');
const deleteAll = document.querySelector('.delete-all');
const ulist = document.querySelector('#ulist');
// ** I Select Again Ul But now with All For Use Foreach() **
let items;
var id, idNum;

//                  ** Save Task To Local Storage **
// Function For Reload Item From LS When Page Refresh
loadItems();

function loadItems() {
    items = getItemsFromLS();
    items.forEach(function (item) {
        ulist.innerHTML += `<li class="task" id=${item.idNumber} data-id="${item.task}" >${item.task}<a href="#" class="edit-task icons"><i>&#128221</i></a><a href="#" class="delete icons"><i>&times;</i></a></li>`;
    })
}

// Get İtem From Local Storages
function getItemsFromLS() {
    if (localStorage.getItem('task') === null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem('task'));
    }
    return items;
}

// Set İtem To Local Storage
function setItemLS(text, id) {
    let itemObj = {task: text, idNumber: id};
    items = getItemsFromLS();
    items.push(itemObj);
    localStorage.setItem('task', JSON.stringify(items));
}

// Remove item from local stroges
function delAnItemFromLS(idNumber) {
    items = getItemsFromLS();
    items.forEach(function (item, indexNum) {
        if (item.idNumber === idNumber) {
            items.splice(indexNum, 1);
        }
    })
    localStorage.setItem('task', JSON.stringify(items));
}

//                  ** Add A Task To List **

// Event Listener For Add Task Buton
addBtn.addEventListener('click', addTask);
// Event Listener For Press Enter
input.addEventListener('keyup', enter)

// Press Enter Function
function enter(event) {
    if (event.key === 'Enter') {
        requireNewItem()
    }
}

// Clicked Add Button Function
function addTask(event) {
    event.preventDefault();
    requireNewItem();
}

// Require For Add New Item
function requireNewItem() {
    if (input.value === '') {
        alert('Lütfen Bir Görev Yazınız.')
    } else {
        createId();
        addİtem(input.value)
        setItemLS(input.value, id)
        input.value = '';
    }
}

// Create Id For Tasks
function createId() {
    idNum = Number(ulist.childElementCount);
    id = `task${idNum}`
    const lists = document.querySelectorAll('li.task');
    lists.forEach((item) => {
        if (item.id == id) {
            idNum += 1;
            id = `task${idNum}`
        }
    })
}

// Add New İtem
function addİtem(text) {
    createId();
    ulist.innerHTML += `<li class="task" id=${id} data-id="${text}" >${text}<a href="#" class="edit-task icons"><i>&#128221</i></a><a href="#" class="delete icons"><i>&times;</i></a></li>`;
}


//                  ** Remove a Task **

// Event Listeners For Delete An Item And Edit Item
ulist.addEventListener('click',(item) => {
    if (item.target.parentElement.className == 'edit-task icons'){
        editTask(item);
    }else if (item.target.parentElement.className == 'delete icons'){
        delAnItem(item);
    }
})


// Delete An İtem Function
function delAnItem(item) {
    item.stopPropagation();
    item.target.parentElement.parentElement.remove();
    // Remove A Task From LS
    let itemId = item.target.parentElement.parentElement.id;
    delAnItemFromLS(itemId);
}
//                  ** Remove All Tasks **

// Delete All Method 1
//deleteAll.addEventListener('click',(item)=>{
// for(let i=(ulist.childElementCount-1);i>=0;i--){
// ulist.children[i].remove();}
// })

// Delete All Method 2
deleteAll.addEventListener('click', () => {
    ulist.innerHTML = '';
    // Delete All From LS
    localStorage.clear();
})

//                    ** Edit Task **


function editTask(item) {
    item.stopPropagation();
    item.preventDefault();
    const liElement = item.target.parentElement.parentElement;
    const liText = liElement.getAttribute('data-id');
    const beforeText = liText;
    liElement.innerHTML = `<input type="text" value="${liText}"> <a href="#" class="tick ">&#10004;</a><a href="#" class="cross icons">&#10006;</a>`
    liElement.children[0].addEventListener('keyup',enterListener);
    confirmIcons();
}
function confirmIcons() {
    const editTickIcon = document.querySelectorAll('a.tick');
    const editCrossIcon = document.querySelectorAll('a.cross');

    editTickIcon.forEach((item) => {
        item.addEventListener('click', tickIcon);
    })
    editCrossIcon.forEach((item) => {
        item.addEventListener('click', crossIcon);
    })
}
function tickIcon(event) {
    event.stopPropagation();
    event.preventDefault();
    const liElement = event.target.parentElement;
    let newText = liElement.children[0].value;
    let liID = liElement.id;
    liElement.setAttribute('data-id',`${newText}`)
    liElement.innerHTML = `${newText}<a href="#" class="edit-task icons"><i>&#128221</i></a><a href="#" class="delete icons"><i>&times;</i></a>`;
    items = getItemsFromLS();
    items.forEach((item)=>{
        if (item.idNumber === liID){
            item.task = newText;
        }
    })
    localStorage.setItem('task',JSON.stringify(items))
}
function crossIcon(event) {
    event.stopPropagation();
    event.preventDefault();
    let liElement = event.target.parentElement;
    let text =liElement.getAttribute('data-id');
    liElement.innerHTML = `${text}<a href="#" class="edit-task icons"><i>&#128221</i></a><a href="#" class="delete icons"><i>&times;</i></a>`;
}
function enterListener (item){
    if (item.key === 'Enter'){
        tickIcon(item);
    }
}


