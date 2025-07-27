const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const label4 = document.getElementById("label4");
const label5 = document.getElementById("label5");

btn1.onclick = function(){
    label1.style.textDecoration = "line-through"
}

btn2.onclick = function(){
    label2.style.textDecoration = "line-through"
}

btn3.onclick = function(){
    label3.style.textDecoration = "line-through"
}

btn4.onclick = function(){
    label4.style.textDecoration = "line-through"
}

btn5.onclick = function(){
    label5.style.textDecoration = "line-through"
}