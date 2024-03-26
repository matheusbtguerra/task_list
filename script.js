function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        var taskList = document.getElementById("taskList");
        var li = document.createElement("li");
        li.className = "taskItem";
        li.innerHTML = taskText + "<button onclick ='removeTask(this)'> Remover </button>";
        taskList.appendChild(li);
        taskInput.value = "";
    } else {
        alert("Por favor, insira uma tarefa válida.")
    }
}

function removeTask(button) {
    var li = button.parentNode;
    var ul = li.parentNode;
    ul.removeChild(li);
}

const chk = document.getElementById('chk')
const themeSystem = localStorage.getItem("themeSystem") || "light"

chk.addEventListener('click', () => {
    let oldTheme = localStorage.getItem("themeSystem") || "light";
    let newTheme = oldTheme == "light" ? "dark" : "light";

    localStorage.setItem("themeSystem", newTheme)
    defineCurrentTheme(newTheme)
})

function defineCurrentTheme(theme){
    document.documentElement.setAttribute("data-theme", theme)

    if(theme == "light") {
       const switchbg = document.getElementById("swt").style.backgroundColor = "#fff";
    } else {
        const switchbg = document.getElementById("swt").style.backgroundColor = "#000";
    }
}

defineCurrentTheme(themeSystem)
