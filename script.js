const container = document.querySelector(".container");
let div = document.createElement("div")


for (let i=0; i<16; i++) {
    let div = document.createElement("div")  
    container.appendChild(div);

        for (let j=0; j<16; j++) {

            div.appendChild(document.createElement("div"))

        }
        
}