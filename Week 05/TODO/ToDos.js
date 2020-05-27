function renderOneTask(task) {
   const item = document.createElement("ion-item");
   //item.setAttribute('data-name', hike.name);
   item.innerHTML = `<ion-checkbox slot="start"></ion-checkbox>
   <ion-label id="taskText" lines="inset">${taskName} Task</ion-label>
   <ion-button color="danger">
      <ion-icon slot="icon-only" name="close-outline"></ion-icon>
   </ion-button>`;
   return item;
}
   
   /*function renderOneHikeFull(hike) {
     const item = document.createElement("li");
     item.classList.add('full');
     item.innerHTML= ` <h2>${hike.name}</h2>
     <div class="image-full">
         <p>${hike.description}</p>
         <img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}">
     </div>
     <div>
       <div>
         <h3>Distance</h3>
         <p>${hike.distance}</p>
       </div>
       <div>
         <h3>Difficulty</h3>
         <p>${hike.difficulty}</p>
       </div>
       <div>
         <h3>Directions</h3>
         <p>${hike.directions}</p>
       </div>
     </div>`;
     return item; 
   }*/