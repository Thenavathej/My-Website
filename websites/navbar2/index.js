console.log("hello world");

const conli = document.getElementById("con");
const contacts = document.getElementById("contacts");

conli.addEventListener("click", hide);

function hide(){
    if(contacts.style.display == "none"){
        contacts.style.display = "flex";
    }

    else{
        contacts.style.display = "none";
    }
}