console.log(`hello world`);
document.write(`hello`);

const change=document.getElementById("change");
const myh6=document.getElementById("myh6");

change.onclick=function(){
myh6.style.color="red";
}

const myh33 = document.getElementById("myh33");
const usernamein = document.getElementById("username");
const mybttn = document.getElementById("mybttn");
let username;

mybttn.onclick = function(){
    username = usernamein.value;
    console.log("username");
    myh33.textContent = `hello${username}`;
}