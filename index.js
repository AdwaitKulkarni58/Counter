document.querySelector(".increment").addEventListener("click", add);
document.querySelector(".decrement").addEventListener("click", subtract);
document.querySelector(".add-ten").addEventListener("click", add_ten);
document.querySelector(".subtract-ten").addEventListener("click", subtract_ten);

function add() {
    let countAddOne = document.querySelector(".display").innerHTML;
    countAddOne++;
    document.querySelector(".display").innerHTML = countAddOne;
}

function subtract() {
    let countSubtractOne = document.querySelector(".display").innerHTML;
    countSubtractOne--;
    document.querySelector(".display").innerHTML = countSubtractOne;
}

function add_ten() {
    let countAddTen = document.querySelector(".display").innerHTML;
    for (let i = 0; i < 10; i++) {
        countAddTen++;
    }
    document.querySelector(".display").innerHTML = countAddTen;
}

function subtract_ten() {
    let countSubtractTen = document.querySelector(".display").innerHTML;
    for (let j = 0; j < 10; j++) {
        countSubtractTen--;
    }
    document.querySelector(".display").innerHTML = countSubtractTen;
}