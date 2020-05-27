const addNewBtn    = document.querySelector('#addNewBtn');
const addNew       = document.querySelector('#addNew');
const deleteBtn    = document.querySelector('#deleteBtn');
const allBtn       = document.querySelector('#allBtn');
const activeBtn    = document.querySelector('#activeBtn');
const completedBtn = document.querySelector('#completedBtn');
const taskList     = document.querySelector('#taskList');
const checkbox     = document.querySelector('#checkbox');


let tasks = [];

addNewBtn.addEventListener('click', () => {
   const newTask = addNew.value;
   if (newTask.trim().length <= 0) {
      //TODO: maybe add css to make the input box glow red.
      console.log('no task entered!');
   } else {
      //TODO: add task to the database.
      tasks.push(newTask);
      taskList.appendChild(renderOneTask(newTask));
      taskCount();

      console.log('content of input is: ' + newTask);
      addNew.value = '';
   }
});

addNew.addEventListener('keypress', function (e) {
   const newTask = addNew.value;
   if(e.key === 'Enter'){
      if (newTask.trim().length <= 0) {
         //TODO: maybe add css to make the input box glow red.
         console.log('no task entered!');
      } else {
         //TODO: add task to the database.
         tasks.push(newTask);
         taskList.appendChild(renderOneTask(newTask));
         taskCount();

         console.log('content of input is: ' + newTask);
         addNew.value = '';
      }
   }
});

function renderOneTask(task) {
   const item = document.createElement("ion-item");
   //item.setAttribute('data-name', hike.name);
   item.innerHTML = `<ion-checkbox slot="start"></ion-checkbox>
   <ion-label id="taskText" lines="inset">${task}</ion-label>
   <ion-button color="danger">
      <ion-icon slot="icon-only" name="close-outline"></ion-icon>
   </ion-button>`;
   return item;
}

function taskCount() {
   const count = document.querySelector('#numTasks');
   count.innerHTML = `${tasks.length} tasks left`
   return count;
}



allBtn.addEventListener('click', () => {
   //TODO: SELECT * FROM tasks;
   allBtn.fill='solid';
   activeBtn.fill='outline';
   completedBtn.fill='outline';
   console.log('SELECT * FROM tasks;');
});

activeBtn.addEventListener('click', () => {
   //TODO: SELECT * FROM tasks WHERE active = TRUE;
   allBtn.fill='outline';
   activeBtn.fill='solid';
   completedBtn.fill='outline';
   console.log('SELECT * FROM tasks WHERE active = TRUE;');
});

completedBtn.addEventListener('click', () => {
   //TODO: SELECT * FROM tasks WHERE completed = TRUE;
   allBtn.fill='outline';
   activeBtn.fill='outline';
   completedBtn.fill='solid';
   console.log('SELECT * FROM tasks WHERE completed = TRUE;');
})