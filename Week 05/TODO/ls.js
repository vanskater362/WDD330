export default class Ls {
   constructor() {
   }

   getAllItems() {
      const allItems = JSON.parse(localStorage.getItem("itemList"));
      return allItems;
   }

   insert(tasks) {
      localStorage.setItem("itemList", JSON.stringify(tasks));
   }
}