import './drink-item.js';

class DrinkList extends HTMLElement {
 
   constructor() {
       super();
       this.shadowDOM = this.attachShadow({mode: "open"});
   }
 
   set drinks(drinks) {
       this._drinks = drinks;
       this.render();
   }
 
   renderError(message) {
    this.shadowDOM.innerHTML = `
    <style>
        .placeholder {
            font-weight: lighter;
            color: rgba(0,0,0,0.5);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
    </style>
    `;
    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
   }
 
   render() {
    this.shadowDOM.innerHTML = "";
    
       this._drinks.forEach(drink => {
           const drinkItemElement = document.createElement("drink-item");
           drinkItemElement.drink = drink
           this.shadowDOM.appendChild(drinkItemElement);
          // console.log(drink);
       })
   }
}
 
customElements.define("drink-list", DrinkList);