import Todos from './Todos.js';

const addNewBtn    = document.querySelector('#addNewBtn');
const addNew       = document.querySelector('#addNew');
const allBtn       = document.querySelector('#allBtn');
const activeBtn    = document.querySelector('#activeBtn');
const completedBtn = document.querySelector('#completedBtn');
const taskList     = document.querySelector('#taskList');
const todo = new Todos();

window.addEventListener('load', () => {
   const newList = JSON.parse(localStorage.getItem("itemList"));
   if (newList != null) 
      todo.renderAllTask(newList);
});

addNewBtn.addEventListener('click', () => {
   let date = new Date();
   let done = false;
   const newTask = todo.createTask(addNew.value, date.getTime(), done);
   if (addNew.value.trim().length <= 0) {
      //TODO: maybe add css to make the input box glow red.
      console.log('no task entered!');
   } else {
      todo.addTask(newTask);
      localStorage.setItem("itemList", JSON.stringify(tasks));
      taskList.appendChild(renderOneTask(newTask));
      todo.addListener(tasks.length-1);
      todo.taskCount();
      addNew.value = '';
   }
});

addNew.addEventListener('keypress', function (e) {
   let date = new Date();
   let done = false;
   const newTask = todo.createTask(addNew.value, date.getTime(), done);
   if(e.key === 'Enter'){
      if (addNew.value.trim().length <= 0) {
         //TODO: maybe add css to make the input box glow red.
         console.log('no task entered!');
      } else {
         todo.addTask(newTask);
         localStorage.setItem("itemList", JSON.stringify(tasks));
         taskList.appendChild(renderOneTask(newTask));
         todo.addListener(tasks.length-1);
         todo.taskCount();
         addNew.value = '';
      }
   }
});

allBtn.addEventListener('click', () => {
   //TODO: SELECT * FROM tasks;
   const newList = JSON.parse(localStorage.getItem("itemList"));
   allBtn.fill='solid';
   activeBtn.fill='outline';
   completedBtn.fill='outline';
   todo.renderAllTask(newList);
});

activeBtn.addEventListener('click', () => {
   //TODO: SELECT * FROM tasks WHERE done = FALSE;
   const fullList = JSON.parse(localStorage.getItem("itemList"));
   let newList = [];
   for (var i = 0; i < fullList.length; i++) {
      if(!fullList[i].done){
         let task = todo.createTask(fullList[i].name, fullList[i].id, fullList[i].done);
         newList.push(task);
      }
   }
   allBtn.fill='outline';
   activeBtn.fill='solid';
   completedBtn.fill='outline';
   todo.renderAllTask(newList);
});

completedBtn.addEventListener('click', () => {
   //TODO: SELECT * FROM tasks WHERE completed = TRUE;
   const fullList = JSON.parse(localStorage.getItem("itemList"));
   let newList = [];
   for (var i = 0; i < fullList.length; i++) {
      if(fullList[i].done){
         let task = todo.createTask(fullList[i].name, fullList[i].id, fullList[i].done);
         todo.newList.push(task);
      }
   }
   allBtn.fill='outline';
   activeBtn.fill='outline';
   completedBtn.fill='solid';
   todo.renderAllTask(newList);
});