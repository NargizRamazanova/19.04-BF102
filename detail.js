const container = document.querySelector(".container")

const currentStudent = JSON.parse(localStorage.getItem("currentStudent"))

for(let key in currentStudent){
    createDiv(currentStudent[key])
}

function createDiv(info){
    let h2 = document.createElement("h2")
    h2.innerText = info

    container.append(h2)
}