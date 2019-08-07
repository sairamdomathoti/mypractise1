// Simple arithmatic Calculator 

function add(){
    console.log("calling add");
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("SecondNumber").value;
    document.getElementById("result").innerHTML = parseInt(num1,10) + parseInt(num2,10);

}


function sub(){
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("SecondNumber").value;
    document.getElementById("result").innerHTML = num1 - num2;
}


function multiply(){
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("SecondNumber").value;
    document.getElementById("result").innerHTML = num1 * num2;
}


function divide(){
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("SecondNumber").value;
    document.getElementById("result").innerHTML = num1 / num2;
}

