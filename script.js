//blueprint for all tasks.ie made constructor function
function task(n,s) {
    this.name = n,
    this.date = new Date().getDate();
    this.status = s
}

//called when submit button is pressed.
function sub(e) {
    e.preventDefault();
    let taskName = document.getElementById("name").value;
    console.log(taskName);
    let Task = new task(taskName, false)
    console.log(Task);
   

    createRow(Task,taskName);
}

function createRow(Task,taskName){



let ul = document.getElementById("list");

let list_1 = document.createElement("h2");
list_1.innerHTML = "TASK - " + Task.name;

let list_2 = document.createElement("h2");
list_2.innerHTML = "DATE - " + Task.date;

let list_3 = document.createElement("h2");
list_3.innerHTML = "STATUS - " + Task.status;

let done = document.createElement("button");
done.innerHTML = "Done";


done.onclick = function() {
    list.style.backgroundColor = "green";
    list_1.style.textDecoration = "text-through"
   
}

let id4 = document.getElementById("id4");
if(id4.innerHTML === "0") {
    id4.innerHTML = 1;
} else {
    let count = id4.innerHTML;
    id4.innerHTML = Number(count) + 1;
}

let remove = document.createElement("button");
remove.innerHTML = "Remove";

remove.onclick = function (){
    list.innerHTML = "";
    let count = id4.innerHTML;
    id4.innerHTML = Number(count) - 1;
}

let toggle_bn = document.createElement("button");
toggle_bn.innerHTML ="TOGGLE";
toggle_bn.onclick = function() {
    let x = task.bind(Task, taskName, !Task.status)
    x()
    list_3.innerHTML = "Task - " + Task.status;
}


ul.append(list_1,list_2,list_3,toggle_bn,done,remove);
todo_list.append(ul);
}