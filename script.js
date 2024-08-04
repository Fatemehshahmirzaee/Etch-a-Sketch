const container = document.querySelector(".container");
let div2Array = [];
const resetBtn = document.querySelector("#reset"); 
const configureBtn = document.querySelector("#configure");
let rows = 16;
let columns = 16;

function getGridSize() {
    rows = prompt("enter number of rows");
    columns = prompt("enter number of columns");
}

configureBtn.addEventListener('click', ()=> getGridSize());


for (let i=0; i<rows; i++) {
    let div = document.createElement("div")  
    container.appendChild(div);

        for (let j=0; j<columns; j++) {

            let div2 = document.createElement("div");
            div.appendChild(div2);
            div2Array.push(div2);
        }       
}

resetBtn.addEventListener('click' , ()=>{

    for (let d of div2Array) {
        d.style.backgroundColor = 'rgb(251, 220, 225)';
        let selectedArray = [];
    } 

})

let selectedArray = [];

for (let d of div2Array) {

    d.addEventListener('click' , () => {
        selectedArray.push(d);
        d.style.backgroundColor = 'red';
    })
}









