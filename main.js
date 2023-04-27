// let input = document.querySelector("#newtodo")
// let addButton = document.querySelector(".btn-primary")
// let clearBtn = document.querySelector(".btn-danger")
// let todolist = document.querySelector(".todolist")
// let errorMsg = document.querySelector(".errorMsg")
// let noElement=document.querySelector("#noElement");

// addButton.addEventListener("click", (e) => {
//     if (input.value.trim() == "") {
//         errorMsg.innerText = "input cannot be empty"
//     } else {
//         errorMsg.innerText = ""
//         if(!noElement.classList.contains("d-none")){
//             noElement.classList.add("d-none")
//         }
//         let todo = addInput(input.value.trim());
//         todolist.append(todo)
//         input.value = ""
//     }
// })

// input.addEventListener("keydown", function(){
//     if(input.value.trim()!= ""){
//         errorMsg.innerText = ""
//     }
// })

// clearBtn.addEventListener("click", function(){
//     todolist.innerHTML = ""
//     noElement.classList.remove("d-none")
// })

// function addInput(value) {

//     let todoItem = document.createElement("div");
//     todoItem.classList.add("todoItem");
//     todoItem.classList.add("d-flex")

//     let todoItemText = document.createElement("h4");
//     todoItemText.innerText = value;

//     let deleteBtn = document.createElement("button")
//     deleteBtn.classList.add("btn")
//     deleteBtn.classList.add("btn-danger")
//     deleteBtn.innerText = "Delete"
//     deleteBtn.addEventListener("click", function(e){
//         let res = confirm("Do you want to delete this todo?")
//         if(res){
//             this.parentElement.remove()
//             if(todolist.childNodes.length == 0){
//                 noElement.classList.remove("d-none")
//             }
//         }
//     })

//     todoItem.append(todoItemText);
//     todoItem.append(deleteBtn);
//     return todoItem;

// }



// students array yaradin. Studentin fullname, age, email olsun.
// bu array-i table-a geyindirin


const students = [
    {
        name: "Yazgul Memmedli",
        email: "yazgul@gmail.com",
        age: 21,
        gpa: 100,
        faculty: "CS"
    },
    {
        name: "Ilahe Meherremove",
        email: "ilahe@gmail.com",
        age: 21,
        gpa: 100,
        faculty: "CS"
    },
    {
        name: "Aysel Emrahova",
        email: "aysel@gmail.com",
        age: 21,
        gpa: 100,
        faculty: "CS"
    },
    {
        name: "Cavidan Shushayev",
        email: "cavidan@gmail.com",
        age: 21,
        gpa: 100,
        faculty: "business"
    },
    {
        name: "Gulnar Nagiyeva",
        email: "gulnar@gmail.com",
        age: 21,
        gpa: 100,
        faculty: "CS"
    },
]


const tableBody = document.querySelector("tbody");

const searchInput = document.querySelector("input")
const searchBtn = document.querySelector("button")

const facultySelect = document.querySelector("#faculty")

facultySelect.addEventListener("change", function(e){
    if(this.options[this.selectedIndex].value.toLowerCase()!= "faculty"){
        let selectedItems = students.filter(x=> x.faculty.toLowerCase() == this.value.toLowerCase())
        tableBody.innerHTML = ""
        selectedItems.forEach(elem => {
            let newRow = createRow(elem);
            tableBody.appendChild(newRow);
        })
    }else{
        students.forEach(elem => {
            let newRow = createRow(elem);
            tableBody.appendChild(newRow);
        })
    }
})

searchBtn.addEventListener("click", function(){
    let searchedItems = students.filter(x=> x.name.includes(searchInput.value))

    tableBody.innerHTML = ""
    searchedItems.forEach(elem => {
        let newRow = createRow(elem);
        tableBody.appendChild(newRow);
    })

})

students.forEach(elem => {
    let newRow = createRow(elem);
    tableBody.appendChild(newRow);
})


function createRow(elem){
    let row = document.createElement("tr")

    let nameTd = document.createElement("td")
    nameTd.innerText = elem.name;

    let ageTd = document.createElement("td")
    ageTd.innerText = elem.age;

    let emailTd = document.createElement("td")
    emailTd.innerText = elem.email;

    let btnTd = document.createElement("td")
    let btn = document.createElement("a")
    btn.innerText = "Read more"
    btn.classList.add("btn-primary")
    btn.style.cursor = "pointer"
    btn.setAttribute("target", "_blank")
    btn.setAttribute("href", "./detail.html")

    btn.addEventListener("click", function(){
        localStorage.setItem("currentStudent", JSON.stringify(elem))
    })

    btnTd.append(btn)

    row.append(nameTd, emailTd, ageTd, btnTd)

    return row;
}



// Student-e UOMG, Ixtisas, Fakulte elave edin amma table de gostermeyin
// Telebeye click-leyende, getsin yeni sehifeye harda bu 
//telebenin butun melumatlari gorunecek

