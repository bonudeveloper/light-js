let input = document.querySelector("#t");
let button = document.querySelector("#dd");
let ul = document.querySelector("ul");
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let input = e.target[0];
    let text = input.value;
    ul.innerHTML += "<li>" + text + "</li>";
    e.target.reset();
    // console.log("submited", input.value);
})