/* ----------------------------- select elements ---------------------------- */

/* for dates */

const dateElement = document.getElementById('day-date');
const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');
const weekDayElement = document.getElementById('weekday');

/* for object attributes */

const title = document.querySelector("#title");
const input = document.querySelector("#input");
const time = document.querySelector("#time");

const msg = document.querySelector("#msg")

/* for buttons */

const button = document.querySelector("#add-btn");
const submit = document.querySelector(".submit");

/* search field */

const filterInput = document.querySelector(".search");


/* -------------------- set global environment variables -------------------- */

const listOfItems = [];

let parsedTitle = "";
let parsedInput = "";
let parsedTime = "";



/* -------------------------------- functions ------------------------------- */

/* paint the element to DOM */

function paintUI(){

    /* DATA */
    /* initializing data structure */

    let data;

    /* check to see if there is a key full with data */
    if(localStorage.getItem("localStorageItems")){
        /* converting from string into js object */

        data = JSON.parse(localStorage.getItem("localStorageItems"));

    } else {
        data = [];
    }

    /* UI */

    let htmlCode = "";

    /* loop over the data to decide and paint the tasks in DOM */
    for(let i = 0; i < data.length; i++){

        getLocalStorageItems(i);

        /* call the create ekenebt to render li to DOM */
        /* htmlCode += createLIElement(data[i]); */

        const htmlCode = `

        <li class="item">
            <div class="card-content">
                <h2 id="list-headline">${parsedTitle}</h2>
                <p id="list-text">${parsedInput}</p>
            </div>
            <div class="card-content-time-stars">
                <p id="list-time">${parsedTime}</p>
                <p id="list-stars">
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                </p>
            </div>
        </li>   

            `;

            console.log(htmlCode);

    }

    /* append the generated html code inside the ul */

    msg.innerHTML += htmlCode;

}

/* create new object */

function createNewListObject(title, input, time){

    const newObject = {
        objectTitle:    title,
        objectInput:    input,
        objectTime:     time
    }

    listOfItems.push(newObject);

    localStorage.setItem("localStorageItems", JSON.stringify(listOfItems));

}

/* clear input */

function clearInputFields(){
    title.value = "";
    input.value = "";
    time.value = "";
}

/* get object from local storage */

function getLocalStorageItems(i){
    const localStorageArray = (localStorage.getItem("localStorageItems"));
/*     console.log(localStorageArray); */
    const localStorageParse = JSON.parse(localStorageArray);
/*     console.log(localStorageParse); */

    const objectsArray = [];

    objectsArray.push(localStorageParse[i].objectTitle);
    objectsArray.push(localStorageParse[i].objectInput);
    objectsArray.push(localStorageParse[i].objectTime);

    parsedTitle = objectsArray[0];
    parsedInput = objectsArray[1];
    parsedTime = objectsArray[2];

/*     console.log(localStorageParse[i].objectTitle); 
    console.log(localStorageParse[i].objectInput); 
    console.log(localStorageParse[i].objectTime);  */

    return [parsedTitle, parsedInput, parsedTime];


}

/* create an li element */

/* function createLIElement(title, input, time){​​

    let code = `

<li class="item">
    <div class="card-content">
        <h2 id="list-headline">${"title"}</h2>
        <p id="list-text">${"input"}</p>
    </div>
    <div class="card-content-time-stars">
        <p id="list-time">${"time"}</p>
        <p id="list-stars">
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
        </p>
    </div>
</li>   

    `; */

    /* give me back whatever inside code variable */

/*     return code;
    console.log(code); 

}​​ */

// Get input element
/*     let filterInput = document.getElementById('filterInput'); */
// Add event listener
filterInput.addEventListener('keyup', filterNames);

function filterNames(){
    // Get value of input
    let filterValue = document.querySelector('.search').value.toUpperCase();

    // Get names ul
    let ul = document.getElementById('msg');
    // Get lis from ul
    let li = ul.querySelectorAll('li.item');

    // Loop through collection-item lis
    for(let i = 0;i < li.length;i++){
        let h2 = li[i].getElementsByTagName('h2')[0];
        // If matched
        if(h2.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }

}




/* ----------------------------- event listeners ---------------------------- */

submit.addEventListener("click", function(event){
    if (title.value || input.value || time.value){
        createNewListObject(title.value, input.value, time.value);
/*         createLIElement(title.value, input.value, time.value); */

const code = `

<li class="item">
    <div class="card-content">
        <h2 id="list-headline">${title.value}</h2>
        <p id="list-text">${input.value}</p>
    </div>
    <div class="card-content-time-stars">
        <p id="list-time">${time.value}</p>
        <p id="list-stars">
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
        </p>
    </div>
</li>   

    `;

    msg.innerHTML += code;

        clearInputFields();
/*         getLocalStorageItems(); */
    } else {
        alert("error")
    }

});

document.addEventListener("DOMContentLoaded", paintUI);



