const CD_Basic = document.getElementById("CD_Basic");
const CD_Advance = document.getElementById("CD_Advance");
const basicBtn = document.getElementById("basicBtn");
const advanceBtn = document.getElementById("advanceBtn");

basicBtn.onclick = function(){
    CD_Basic.style.display = "flex";
    CD_Basic.style.flexDirection = "column";
    CD_Advance.style.display = "none";
}
advanceBtn.onclick = function(){
    CD_Basic.style.display = "none";
    CD_Advance.style.flexDirection = "column";
    CD_Advance.style.display = "flex";
}

const firstNumIn = document.getElementById("firstNumIn");
const CD_basic_Cal = document.getElementById("CD_basic_Cal");
const secondNumIn = document.getElementById("secondNumIn");
const CD_Advance_Cal = document.getElementById("CD_Advance_Cal");
let CD_Calculate;

CD_basic_Cal.onclick = function(){
    const first = parseFloat(firstNumIn.value);
    const second = parseFloat(secondNumIn.value);
    if (!isNaN(first) && !isNaN(second)) {
        const result = Math.abs(second - first);
        alert("CD: " + result); // Or display it in a span
        CD_Calculate = result;
    } else {
        alert("Enter valid numbers!");
    }
}
