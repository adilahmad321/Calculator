var add = (x, y) => x + y;
var subtract = (x, y) => x - y;
var multiply = (x, y) => x * y;
var divide = (x, y) => x / y;

var result = null;
var operand1 = null;
var operand2 = null;
var operator = null;
var flag = 0;

var operate = (x, operator, y) => {
    switch(operator){
        case "+":
            return add(x, y);
            break;
        case "-":
            return subtract(x, y);
            break;
        case "*":
            return multiply(x, y);
            break;
        case "/":
            if (y == 0){
                text[0].innerHTML = "MATH ERROR!";
            }
            else{
                return divide(x, y);
            }
            break;         
    }
}

var text = document.getElementsByClassName("text");
var numbers = document.getElementsByClassName("numb");
var operators = document.getElementsByClassName("operate");
var equal = document.getElementsByClassName("equal");
var clear = document.getElementsByClassName("clear");

[].forEach.call(numbers, (e) => {
    e.addEventListener("click", () => {
        if(result){
            text[0].innerHTML = "";
            result = null;
        }
        if(text[0].innerHTML == "MATH ERROR!"){
            text[0].innerHTML = "";
        }
        text[0].innerHTML += e.innerHTML;
    });
});

[].forEach.call(operators, (e) => {
    e.addEventListener("click", () => {
        if (flag == 0){
            if(operand1){
                operand2 = Number(text[0].innerHTML);
                compute1();
                operand1 = Number(text[0].innerHTML);
            }
            else{
                operand1 = Number(text[0].innerHTML);
                text[0].innerHTML = "";
            }
            operator = e.innerHTML;
        }
        else{
            operator = e.innerHTML;
            flag = 0;
        }
    });
});

equal[0].addEventListener("click", compute = () => {
    if(operand1){
        operand2 = Number(text[0].innerHTML);
        compute1();
        operator=null;
        flag = 1;
    }
});

compute1 = () => {
    result = precision(operate(operand1, operator, operand2));
    text[0].innerHTML = result;
    operand1=result;
}

clear[0].addEventListener("click", () => {
    text[0].innerHTML = "";
    operand1 = null;
    operand2 = null;
    operator = null;
});

precision = (n) => {
    if (n % 1 == 0){
        return n
    }
    else {
        return n.toFixed(2);
    }
}