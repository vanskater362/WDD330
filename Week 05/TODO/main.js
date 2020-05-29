const addNewBtn    = document.querySelector('#addNewBtn');
const addNew       = document.querySelector('#addNew');
const deleteBtn    = document.querySelector('#deleteBtn');
const allBtn       = document.querySelector('#allBtn');
const activeBtn    = document.querySelector('#activeBtn');
const completedBtn = document.querySelector('#completedBtn');
const taskList     = document.querySelector('#taskList');
const checkbox     = document.querySelector('#checkbox');


let tasks = [];
class taskItem { 
   constructor(task) {
      let date = new Date();
      this.id = date.getTime();
      this.name = task;
      this.done = false;
   }
   
   getName() { return this.name; }
   getDone() { return this.done; }
   getId()   { return this.id;   }
   setDone(done) { this.done = done; }
}

function addListener(i) {
   let del = document.getElementsByClassName("delete");
   let check = document.getElementsByClassName("check");
   let text = document.getElementsByClassName("text");
   
   //for (let i = 0; i < tasks.length; i++) {
      //del[i].removeEventListener('click', linkclick, false);
      del[i].addEventListener("click", function delClick() {
         console.log("you clicked region number " + i);
         //delete tasks[i];
         tasks.splice(i,1);
         localStorage.setItem("itemList", JSON.stringify(tasks));
         //console.log(tasks);
         renderAllTask();

      });
}

addNewBtn.addEventListener('click', () => {
   const newTask = new taskItem(addNew.value);
   if (addNew.value.trim().length <= 0) {
      //TODO: maybe add css to make the input box glow red.
      console.log('no task entered!');
   } else {
      //TODO: add task to the database.
      tasks.push(newTask);
      localStorage.setItem("itemList", JSON.stringify(tasks));
      taskList.appendChild(renderOneTask(newTask));
      addListener(tasks.length-1);
      taskCount();
      addNew.value = '';
   }
});

addNew.addEventListener('keypress', function (e) {
   const newTask = new taskItem(addNew.value);
   if(e.key === 'Enter'){
      if (addNew.value.trim().length <= 0) {
         //TODO: maybe add css to make the input box glow red.
         console.log('no task entered!');
      } else {
         //TODO: add task to the database.
         tasks.push(newTask);
         localStorage.setItem("itemList", JSON.stringify(tasks));
         taskList.appendChild(renderOneTask(newTask));
         addListener(tasks.length-1);
         taskCount();
         addNew.value = '';
      }
   }
});

function renderOneTask(task) {
   const item = document.createElement("ion-item");
   
   item.innerHTML = `<ion-checkbox class="check" slot="start"></ion-checkbox>
   <ion-label class="text" lines="inset">${task.getName()}</ion-label>
   <ion-button class="delete" color="danger">
      <ion-icon slot="icon-only" name="close-outline"></ion-icon>
   </ion-button>`;
   
   return item;
}

function renderAllTask() {
   taskList.innerHTML = "";
   const newList = JSON.parse(localStorage.getItem("itemList"));
   tasks.splice(0, tasks.length);
   console.log(tasks[0]);

   for (let i = 0; i < newList.length; i++){
      const newTask = new taskItem(newList[i].name);
      tasks.push(newTask);
      taskList.appendChild(renderOneTask(newTask));
      addListener(i);
   }
   taskCount();
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
});