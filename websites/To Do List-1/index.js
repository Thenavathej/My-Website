const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");
const checkbox3 = document.getElementById("checkbox3");
const checkbox4 = document.getElementById("checkbox4");
const lab1 = document.getElementById("lab1");
const lab2 = document.getElementById("lab2");
const lab3 = document.getElementById("lab3");
const lab4 = document.getElementById("lab4");

checkbox1.onclick = function(){
    lab1.style.textDecoration = "line-through";
    lab1.style.color = "rgb(99, 94, 94)";
}
checkbox2.onclick = function(){
    lab2.style.textDecoration = "line-through";
    lab2.style.color = "rgb(99, 94, 94)";
}
checkbox3.onclick = function(){
    lab3.style.textDecoration = "line-through";
    lab3.style.color = "rgb(99, 94, 94)";
}
checkbox4.onclick = function(){
    lab4.style.textDecoration = "line-through";
    lab4.style.color = "rgb(99, 94, 94)";
}

