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

let tasks = [];
export default class ToDos {
   constructor() {
   }

   addListener(i) {
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

   renderOneTask(task) {
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

   renderAllTask(newList) {
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

   taskCount() {
      const count = document.querySelector('#numTasks');
      count.innerHTML = `${tasks.length} tasks left`
      return count;
   }

   createTask(name, id, done) {
      const newTask = new taskItem(name, id, done);

      return newTask;
   }

   addTask(task) {
      tasks.push(task);
   }
}
