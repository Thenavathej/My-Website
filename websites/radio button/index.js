const con = document.getElementById("con");
const condup = document.getElementById("condup");
const btny = document.getElementById("yes");
const btnno = document.getElementById("no");
const btnn = document.getElementById("nod");
const btnyd = document.getElementById("yesd");
btnno.addEventListener("click", () => {
    con.style.display = "none";
    condup.style.display = "flex";
});

btnyd.addEventListener("click", () => {
    condup.style.display = "none";
    con.style.display = "flex";
});