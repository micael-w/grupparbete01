/************SELECTORS***********/
//For Dates
const dateElement = document.getElementById('day-date');
const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');
const weekDayElement = document.getElementById('weekday');
//For Inputs
const form = document.querySelector('#input-group');
const itemList = document.querySelector('.item-list');
const ul = document.querySelector('#msg');

const popUp = document.getElementById('pop-up');

/*****UPPLOAD******/


/*************FUNCTIONS**************/

function createLIElement(title, text, time){
    const code = `
        <li class="item">
            <div class="card-content">
                <h2 id="list-headline">${title}</h2>
                <p id="list-text">${text}</p>
            </div>
            <div class="card-content-time-stars">
                <p id="list-time">${time}</p>
                <p id="list-stars">
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </p>
            </div>
        </li>   
    `;
    
    return code; 
}




/***************EVENTS**************/
function loadEventListeners(){
    taskForm.addEventListener('submit', addTodo);

}


/***************************DATES****************************/

/********Get Date By Day: 1-31*****/
let day = new Date();
document.getElementById("day-date").innerHTML = day.getDate();

/***********Get Month************/
let c = new Date();
let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
document.getElementById("month").innerHTML = months[c.getMonth()];

/**********Get Year*************/
let year = new Date();
document.getElementById("year").innerHTML = year.getFullYear();

/**********Get Weekday**********/
let f = new Date();
let weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

let n = weekday[f.getDay()];
document.getElementById("weekday").innerHTML = n;

/************************************************************/



/**CREATE A TODO**/

let todos = [];

const addTodo = (ev)=>{
    ev.preventDefault();

    let todo = {
        title: document.getElementById('title').value,
        text: document.getElementById('input').value,
        time: document.getElementById('time').value
    }

    todos.push(todo);
    
    

    document.forms[0].reset();

    createLIElement(title, text, time);

    

    //console.warn('added', {todos});
    //let pre = document.querySelector('#msg pre');
    //pre.textContent = '\n' + JSON.stringify(todos, '\t', 3);

    //Saving to localstorage
    localStorage.setItem('MytodoList', JSON.stringify(todos));
    }
 
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('add-btn').addEventListener('click', addTodo);
});
