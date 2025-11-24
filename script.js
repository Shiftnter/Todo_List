function addTask() {
    let input = document.getElementById("taskInput");
    let list = document.getElementById("taskList");

    if (input.value.trim() === "") return;

    let li = document.createElement("li");
    li.textContent = input.value;
    list.appendChild(li);

    input.value = "";
}
