const incressbtn = document.getElementById("incress");
const decressbtn = document.getElementById("decress");
const resetbtn = document.getElementById("reset");
let counter = document.getElementById("counter");

let count = 0;

incressbtn.onclick = function(){
    count++
    counter.textContent = count;
}
decressbtn.onclick = function(){
    count--
    counter.textContent = count;
}
resetbtn.onclick = function(){
    count = 0;
    counter.textContent = count;
}
console.log(`hello`);