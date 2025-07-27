const btndis1 = document.getElementById("btndis1");
const btndis2 = document.getElementById("btndis2");
const des = document.getElementById("des");
const des2 = document.getElementById("des2");

btndis2.onclick = function(){
    des2.style.display = "inline-block";
    des.style.display = "none";
}

btndis1.onclick = function(){
    des2.style.display = "none";
    des.style.display = "inline-block";
}

const btnc1 = document.getElementById("btnc1");
const btnc2 = document.getElementById("btnc2");
const btnc3 = document.getElementById("btnc3");
const btnc4 = document.getElementById("btnc4");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");

btnc1.onclick = function(){
    document.body.style.backgroundImage = "linear-gradient(45deg , rgb(250, 84, 112) , rgb(156, 78, 78) , rgb(250, 84, 112) )";
}

btnc2.onclick = function(){
    document.body.style.backgroundImage = "linear-gradient(45deg ,rgb(5, 117, 192) , rgb(181, 204, 220) , rgb(5, 117, 192)) ";
    img1.style.display = "none";
    img3.style.display = "none";
    img4.style.display = "none";
    img2.style.display = "inline-block"
}

btnc3.onclick = function(){
    document.body.style.backgroundImage = "linear-gradient(45deg,rgb(45, 112, 31),rgb(181, 209, 174),rgb(45, 112, 31))";
    img1.style.display = "none";
    img2.style.display = "none";
    img4.style.display = "none";
    img3.style.display = "inline-block"
}

btnc4.onclick = function(){
    document.body.style.backgroundImage = "linear-gradient(45deg,rgb(120, 40, 120),rgb(213, 128, 213),rgb(120, 40, 120))";
    img1.style.display = "none";
    img2.style.display = "none";
    img3.style.display = "none";
    img4.style.display = "inline-block"
}