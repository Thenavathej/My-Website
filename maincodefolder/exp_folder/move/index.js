const mybox = document.getElementById("text");
const myboxDup = document.getElementById("text-dup");

mybox.addEventListener("click",=> function(){
    myboxDup.style.display = "flex";
    myboxDup.style.zIndex = "1";
    mybox.style.display = "none";
});

