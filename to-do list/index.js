const title = document.getElementById("title");
const description = document.getElementById("description");
const container = document.querySelector(".container");
const form = document.querySelector("form");

const tasks = localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];
showAllTasks();
function showAllTasks(){
    tasks.forEach((value,index) => {

        const div = document.createElement("div");
        div.setAttribute("class", "task");

        const innerDiv = document.createElement("div");
        innerDiv.setAttribute("class", "task-body");
        div.append(innerDiv);

        const span = document.createElement("span");
        span.innerText = value.title;
        innerDiv.append(span);

        const p = document.createElement("p");
        p.innerText = value.description;
        innerDiv.append(p);

        const btn = document.createElement("button");
        btn.setAttribute("class","delete-btn")
        btn.innerText = "-";
        div.append(btn);

        btn.addEventListener("click", () => {
            removeTasks();
            tasks.splice(index,1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            showAllTasks();
        })

        container.append(div);

    })
}

function removeTasks(){
    tasks.forEach(() => {
        const div = document.querySelector(".task");
        div.remove();
    })
}

form.addEventListener("submit", (e) => {
    
    e.preventDefault();
    removeTasks();
    
    tasks.push({ 
        title: title.value,
        description: description.value
    })
    localStorage.setItem("tasks", JSON.stringify(tasks));
   showAllTasks();
   
})