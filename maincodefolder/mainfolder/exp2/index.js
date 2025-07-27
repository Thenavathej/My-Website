console.log(`hello world`);
document.write("change");

document.write(`wtf`);

let enteredUsername;

document.getElementById("my-submit").onclick = function() {
  enteredUsername = document.getElementById("my-text").value;
  console.log(`Username: ${enteredUsername}`);
  document.getElementById("my-h3").textContent = `Hello ${enteredUsername}`;
};
