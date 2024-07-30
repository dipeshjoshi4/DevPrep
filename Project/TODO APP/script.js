
// !time [01:38:00]

//1.Task Add
//2.Task Delete
//3.Task Update

//1.select the all the needed elements which we required
const input = document.querySelector("input")
const button = document.querySelector("button")
const taskList = document.querySelector(".list")

//2.userinteraction

function inputHandler() {

    //Click and get input data
    const newTask = input.value;

    //task value is 0 means empty then return
    if (newTask.length == 0) {
        return;
    }

    //task is same then what ?
   

    //element created
    const taskElem = createTask(newTask)


    //element  div add in ul
    taskList.appendChild(taskElem);


    //input empty
    input.value = "";

    //delete logic
    const deleteBtn = taskElem.children[1];
    deleteBtn.addEventListener("click", function () {
        taskElem.remove();
    })

    //edit logic
    const editbtn = taskElem.children[2];
    editbtn.addEventListener("click", function () {
        const li = taskElem.querySelector("li"); // Find the <li> element within taskElem
        const updatedTask = prompt("Change Todo value", li.textContent); // Prompt user for new task value
        if (updatedTask !== null && updatedTask.trim() !== "") {        // Check if the new value is not empty
            li.textContent = updatedTask; // Update the <li> text
        }
    })

}

function createTask(newTask) {
    const div = document.createElement("div");
    div.style.display = "flex";
    div.style.justifyContent = "space-around";

    const li = document.createElement("li");
    li.style.listStyle = "numeric";

    const button = document.createElement("button");
    const editbutton = document.createElement("button")
    editbutton.innerText = "edit";
    button.innerText = "Delete";

    li.textContent = newTask;

    div.appendChild(li);
    div.appendChild(button);
    div.appendChild(editbutton);

    return div;
}

button.addEventListener("click", inputHandler)


