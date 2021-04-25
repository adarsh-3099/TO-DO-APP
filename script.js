const add_work = document.querySelector("button")
const modal = document.querySelector(".todo")
const user_inputs  = document.querySelectorAll("input")
const backdrop = document.getElementById("backdrop")
const add_cnfrm = modal.children[4]
const cancel_cnfrm = modal.children[5]
const show_todo = document.querySelector(".show")
const list = document.querySelector(".list")

const delete_button = document.querySelector(".delete").children[0]

console.log(delete_button)

let todo_list = [];

const toggleView = () => {
    modal.classList.toggle("show")
}

const takeInputs = () => {
    console.log("Adarsh")
    if(user_inputs[0].value.trim()==="" || user_inputs[1].value.trim()===""){
        alert("Please enter correct Values")
    }
    else{
        let inp = {
            id : Math.random().toString(),
            work : user_inputs[0].value,
            time : user_inputs[1].value
        }
        todo_list.push(inp)
        show_list(inp.work,inp.time)
        clearInputs()
    }
}

const clearInputs = () => {
    user_inputs[0].value = ""
    user_inputs[1].value = ""
}

const clearHandler = () => {
    modal.classList.toggle("show")
}

const show_list = (work,time) => {
    let new_ele = document.createElement('li')
    new_ele.className = "new-element"
    new_ele.innerHTML = `
        <div class="new-element_work">
        <h2>${work} - ${time}</h2>
    </div>
    `   
    new_ele.style.textAlign = "center";
    list.append(new_ele)
}

const deleteHandler = () => {
    list.children[0].remove();
    todo_list.pop();
}

console.log(todo_list)

add_cnfrm.addEventListener('click',takeInputs)
cancel_cnfrm.addEventListener('click',clearHandler)
add_work.addEventListener('click',toggleView)
delete_button.addEventListener('click',deleteHandler)