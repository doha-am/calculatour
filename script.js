var Ac = document.getElementById("AC");
var resultInput = document.querySelector(".result");
var buttons = document.querySelectorAll("#btn");
var deleteButton = document.getElementById("delete");
var equalButton = document.getElementById("equal")

buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
        e.preventDefault();
        resultInput.value += button.textContent;
    });
});

Ac.addEventListener("click", (e) => {
    e.preventDefault();

    resultInput.value = "";
});

deleteButton.addEventListener("click", (e) => {
    e.preventDefault();

    resultInput.value = resultInput.value.slice(0, -1);
});

equalButton.addEventListener("click", (e) => {
    e.preventDefault();

    resultInput.value = eval(resultInput.value);
})