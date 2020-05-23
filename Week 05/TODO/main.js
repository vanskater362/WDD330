const addNewBtn    = document.querySelector('#addNewBtn');
const addNew       = document.querySelector('#addNew');
const deleteBtn    = document.querySelector('#deleteBtn');
const allBtn       = document.querySelector('#allBtn');
const activeBtn    = document.querySelector('#activeBtn');
const completedBtn = document.querySelector('#completedBtn');
const taskList     = document.querySelector('#taskList');

addNewBtn.addEventListener('click', () => {
   const newTask = addNew.value;
   if (newTask.trim().length <= 0) {
      //TODO: maybe add css to make the input box glow red.
      console.log('no task entered!');
   } else {
      //TODO: add task to the database.
      const newItem = document.createElement('ion-item');
      const newCheck = document.createElement('ion-')
      newItem.textContent = newTask;
      taskList.appendChild(newItem);
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
         const newItem = document.createElement('ion-item');
         const newCheck = document.createElement('ion-')
         newItem.textContent = newTask;
         taskList.appendChild(newItem);
         console.log('content of input is: ' + newTask);
         addNew.value = '';
      }
   }
})

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