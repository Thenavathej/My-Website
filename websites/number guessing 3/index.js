const h1One = document.getElementById("h1One");
const input1 = document.getElementById("input1");
const subBtn = document.getElementById("subBtn");

let minNum = 1;
let maxNum = 100;
let answer = Math.floor(Math.random() * (maxNum - minNum)) + minNum;

console.log(`Answer: ${answer}`);

let attempts = 0;
let running = true;
let player = window.prompt(`ENTER YOUR NAME`);

input1.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        subBtn.click();
    }
})

h1One.textContent = `Game Is Running By ${player}`;
input1.focus();

window.alert(`GUESS A NUMBER BETWEEN ${minNum} - ${maxNum}`);

subBtn.onclick = function(){
    if(!running) return;

    let guess = Number(input1.value);
    input1 = "";

    if(isNaN(guess)){
        window.alert(`Please enter valid number`);
        return;
    }

    if( guess < minNum || guess > maxNum){
        window.alert(`please enter a number between ${minNum} - ${maxNum}`);
        return;
    }

    attempts++;

    if(guess < answer){
        window.alert(`TOO LOW!, TRY AGIN`);
    }

    else if(guess > answer){
        window.alert(`TOO HIGH!, TRY AGIN`);
    }

    else{
        window.alert(`Correct answer ${player} have won!`);
        window.alert(`The answer was ${answer}. It tool you ${attempts} attempts`);
        window.alert(`THE GAME HAS ENDED.`);
        h1One.textContent = `${player} has won 🎉`;
        running = false;
        input1 = disabled;
        subBtn = disabled;
    }
}