const container = document.querySelector(".container");
const createBtn = document.querySelector("#createGrid");
const clear = document.querySelector("#clear");

let size = 16;

createGrid(size);

function getSize() {
    size = prompt("Enter your desired size");  
}

createBtn.addEventListener('click', () => {
    getSize();
    document.querySelectorAll(".gridRow").forEach( e => e.remove());
    createGrid(size);

})


// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   }

function getRandomColor() {
    var r = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);

    return `rgb(${r},${g},${b})`
}


function createGrid(size) {

    for (let i=1 ; i<=size; i++) {

        let gridRow = document.createElement("div");
        gridRow.classList.add('gridRow');
        
        gridRow.style.height = `${100/size}%`;
        gridRow.style.width = '100%';
        gridRow.style.display = 'flex';
        gridRow.style.backgroundColor = 'white';
        gridRow.style.borderColor = 'black';
        container.appendChild(gridRow);




        for (let j=1 ; j<=size; j++) {


            let gridCell = document.createElement('div');
            gridCell.classList.add('gridCell')
            gridCell.style.backgroundColor = 'white';
            gridCell.style.border = "1px solid lightGray";
            gridCell.style.height= "100%";
            gridCell.style.flex = 1;
            gridRow.appendChild(gridCell);  
            gridCell.addEventListener('mouseover', ()=> {
                gridCell.style.backgroundColor = getRandomColor();
            });

        }
    }
}


clear.addEventListener('click', ()=> {
    document.querySelectorAll(".gridCell").forEach( e => {
        e.style.backgroundColor= 'white';
    });
})



