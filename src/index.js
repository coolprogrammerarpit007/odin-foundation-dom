`use strict`;

// const body = document.querySelector(`body`);
// const container = document.createElement(`div`);
// const text1 = document.createElement(`p`);
// text1.style.color = `red`;
// text1.textContent = `Hey I'm red!`;

// const h3 = document.createElement(`h3`);
// h3.textContent = `I'm a blue h3!`;
// h3.style.color = `blue`;

// const div = document.createElement(`div`);
// div.style.border = `1px solid black`;
// div.style.backgroundColor = `pink`;
// const heading = document.createElement(`h1`);
// heading.textContent = `I'm in a div`;
// const text2 = document.createElement(`p`);
// text2.textContent = `Me too`;
// div.appendChild(heading);
// div.appendChild(text2);

// container.appendChild(text1);
// container.appendChild(h3);
// container.appendChild(div);
// body.appendChild(container);


// the callback function is a function that is passed to another function as an argument.
// The e parameter in the callback function is an event object that refrences to event  itself. 

// *********************************
// *********************************

// Adding functuanility to the shopping list container
let count = 1;
const container = document.querySelector(`.container`);
const inputSearch = document.getElementById(`search`);
const btn = document.getElementById(`btn`);
const shoppingContainer = document.getElementById(`shopping-item-container`);

btn.addEventListener(`click`,function(e){
    const parentEl = document.createElement(`div`);
    parentEl.setAttribute(`id`,`parent-${count}`);
    const item = document.createElement(`li`);
    item.textContent = inputSearch.value;
    const deleteBtn = document.createElement(`button`);
    deleteBtn.textContent = `Delete Item`;
    deleteBtn.dataset.number = `parent-${count}`;
    deleteBtn.classList.add(`delete-btn`);
    parentEl.appendChild(item);
    parentEl.appendChild(deleteBtn);
    shoppingContainer.appendChild(parentEl);
    count++;



    // event listener to the delete btn

    deleteBtn.addEventListener(`click`,(e)=>{
        console.log(`item deleted`);
        console.log(e.target.dataset.number);
        document.getElementById(e.target.dataset.number).remove();
    })
})