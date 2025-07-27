function addTask() {
    const input1 = document.getElementById("input1");
    const taskList = input1.value.trim();

    input1.focus();
    input1.addEventListener('keydown', function(event){
        if(event.key === "Enter"){
            subBtn .click();
        }
    })

    if(taskList === '') return;

    const li = document.createElement('li');
    
    li.textContent = taskList;

    li.addEventListener("click", () => {
        li.classList.toggle('completed');
    });

    li.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        li.remove();
    });

    document.getElementById('taskList').appendChild(li);
    input1.value = '';
}