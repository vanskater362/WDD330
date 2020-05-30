const addNewBtn    = document.querySelector('#addNewBtn');
const addNew       = document.querySelector('#addNew');
const allBtn       = document.querySelector('#allBtn');
const activeBtn    = document.querySelector('#activeBtn');
const completedBtn = document.querySelector('#completedBtn');
const taskList     = document.querySelector('#taskList');

window.addEventListener('load', () => {
   const newList = JSON.parse(localStorage.getItem("itemList"));
   renderAllTask(newList);
})

let tasks = [];
class taskItem { 
   constructor(task, id, done) {
      this.id = id;
      this.name = task;
      this.done = done;
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
   
   del[i].addEventListener("click", function delClick() {
      tasks.splice(i,1);
      localStorage.setItem("itemList", JSON.stringify(tasks));
      renderAllTask(JSON.parse(localStorage.getItem("itemList")));
   });

   check[i].addEventListener("click", () => {
      if (!tasks[i].done) {
         tasks[i].done = true;
         text[i].innerHTML = `<s>${tasks[i].name}</s>`;
         localStorage.setItem("itemList", JSON.stringify(tasks));
      }else {
         text[i].innerHTML = tasks[i].name;
         tasks[i].done = false;
         localStorage.setItem("itemList", JSON.stringify(tasks));
      }
   })
}

addNewBtn.addEventListener('click', () => {
   let date = new Date();
   let done = false;
   const newTask = new taskItem(addNew.value, date.getTime(), done);
   if (addNew.value.trim().length <= 0) {
      //TODO: maybe add css to make the input box glow red.
      console.log('no task entered!');
   } else {
      tasks.push(newTask);
      localStorage.setItem("itemList", JSON.stringify(tasks));
      taskList.appendChild(renderOneTask(newTask));
      addListener(tasks.length-1);
      taskCount();
      addNew.value = '';
   }
});

addNew.addEventListener('keypress', function (e) {
   let date = new Date();
   let done = false;
   const newTask = new taskItem(addNew.value, date.getTime(), done);
   if(e.key === 'Enter'){
      if (addNew.value.trim().length <= 0) {
         //TODO: maybe add css to make the input box glow red.
         console.log('no task entered!');
      } else {
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
   if (task.done) {
      item.innerHTML = `<ion-checkbox class="check" slot="start"></ion-checkbox>
      <ion-label class="text" lines="inset"><s>${task.getName()}</s></ion-label>
      <ion-button class="delete" color="danger">
         <ion-icon slot="icon-only" name="close-outline"></ion-icon>
      </ion-button>`;
   }else {
      item.innerHTML = `<ion-checkbox class="check" slot="start"></ion-checkbox>
   <ion-label class="text" lines="inset">${task.getName()}</ion-label>
   <ion-button class="delete" color="danger">
      <ion-icon slot="icon-only" name="close-outline"></ion-icon>
   </ion-button>`;
   }
   
   return item;
}

function renderAllTask(newList) {
   taskList.innerHTML = "";
   
   tasks.splice(0, tasks.length);

   for (let i = 0; i < newList.length; i++){
      const newTask = new taskItem(newList[i].name, newList[i].id, newList[i].done);
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
   const newList = JSON.parse(localStorage.getItem("itemList"));
   allBtn.fill='solid';
   activeBtn.fill='outline';
   completedBtn.fill='outline';
   renderAllTask(newList);
});

activeBtn.addEventListener('click', () => {
   //TODO: SELECT * FROM tasks WHERE done = FALSE;
   const fullList = JSON.parse(localStorage.getItem("itemList"));
   let newList = [];
   for (var i = 0; i < fullList.length; i++) {
      if(!fullList[i].done){
         let task = new taskItem(fullList[i].name, fullList[i].id, fullList[i].done);
         newList.push(task);
      }
   }
   allBtn.fill='outline';
   activeBtn.fill='solid';
   completedBtn.fill='outline';
   renderAllTask(newList);
   
});

completedBtn.addEventListener('click', () => {
   //TODO: SELECT * FROM tasks WHERE completed = TRUE;
   const fullList = JSON.parse(localStorage.getItem("itemList"));
   let newList = [];
   for (var i = 0; i < fullList.length; i++) {
      if(fullList[i].done){
         let task = new taskItem(fullList[i].name, fullList[i].id, fullList[i].done);
         newList.push(task);
      }
   }
   allBtn.fill='outline';
   activeBtn.fill='outline';
   completedBtn.fill='solid';
   renderAllTask(newList);
});