const passwordInput = document.getElementById("passwordInput");
const passwordDiv = document.getElementById("passwordDiv");
const seeProjectBtn = document.getElementById("seeProjectBtn");
const enterBtn = document.getElementById("enterBtn");
const container = document.getElementById("container");
const aboutMeBtn = document.getElementById("aboutMeBtn");

const password = "2255";

aboutMeBtn.addEventListener("click", function(e) {
    e.preventDefault();
    container.style.opacity = 0.2;
    passwordDiv.style.opacity = 1;
    passwordDiv.style.display = "flex";
});

enterBtn.onclick = () => {
    const userinfo = passwordInput.value;
    if (userinfo === password) {
        window.location.href = "websites/About Me/index.html";
    } else {
        alert("Incorrect Password");
    }
};
