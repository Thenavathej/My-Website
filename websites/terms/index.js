const btnTerm = document.getElementById("btnTerm");
const container = document.getElementById("container");
const btnClose = document.getElementById("btnClose");
const btnDec = document.getElementById("btnDec");
const btnAcc = document.getElementById("btnAcc");
const h1One = document.getElementById("h1One");

btnTerm.onclick = function(){
    btnTerm.style.display = "none";
    container.style.display = "block";
}

btnClose.onclick = function(){
    btnTerm.style.display = "flex";
    container.style.display = "none";
}

btnDec.onclick = function(){
    btnTerm.style.display = "flex";
    container.style.display = "none";
    h1One.textContent = "Fuck You"
}

btnAcc.onclick = function(){
    btnTerm.style.display = "flex";
    container.style.display = "none";
    h1One.textContent = "Thank You";
}