// Part 1: Basics
function greetUser() {
  let name = document.getElementById("username").value;
  let message = "";

  if (name) {
    message = "Hello, " + name + "! Welcome to JavaScript!";
  } else {
    message = "Please enter your name first!";
  }

  document.getElementById("greeting").textContent = message;
}

// Part 2: Functions
function addNumbers(a, b) {
  return a + b;
}

function showSum() {
  let n1 = parseInt(document.getElementById("num1").value) || 0;
  let n2 = parseInt(document.getElementById("num2").value) || 0;

  let result = addNumbers(n1, n2);
  document.getElementById("sumResult").textContent = "Sum: " + result;
}

// Part 3: Loops
function countdown() {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // Clear old list

  for (let i = 3; i > 0; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
}

// Part 4: DOM Manipulation
function toggleMessage() {
  let secret = document.getElementById("secret");
  secret.classList.toggle("hidden");
}
