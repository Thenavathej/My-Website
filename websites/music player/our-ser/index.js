const mainCon = document.getElementById("mainCon");
const read = document.getElementById("read");

function appear(){
    mainCon.style.display = "none";
    read.style.display = "flex";
}

function dis(){
    mainCon.style.display = "flex";
    read.style.display = "none";
}