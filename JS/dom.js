//how to get html node in js
const container = document.getElementById("container");
const container_second = document.querySelector("#container");
const boxes = document.querySelector(".boxes");
const boxes_two = document.getElementsByClassName("boxes");
const btn = document.getElementById("btn");
const display = document.querySelector(".display");

console.log(container.lastElementChild);

btn.onclick = function () {
  const name = document.createElement("b");
  name.textContent = "This is Goodluck";
  name.classList.add("box");
  name.setAttribute("style", "color: blue; background: white;");
  name.setAttribute("id", "name");
  boxes.appendChild(name);

  container.removeChild(display);
};

//adding event fucntion from html
function consoleFucntion() {
  console.log("this button was clicked ");
}

const button = document.getElementById("button");

//with on <event name>
button.onclick = function (params) {
  console.log("this was triggered from javascript");
};

const button_event = document.getElementById("button_event");

//adding event with event listener
button_event.addEventListener("click", function (params) {
  console.log("event listener was triggered");
});
