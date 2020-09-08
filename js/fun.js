//get value by the fname text field
function getInputValue() {
    var num = document.getElementById("fname").value;
    document.getElementById("output").innerHTML = "your factorial is :" + (fact(num));
}

//compute the factotial of given number
function fact(n) {

    if (n > 0) {
        if (n == 1) {
            return 1;
        } else {
            return n * fact(n - 1);
        }
    }
}

//check number is prime or not
function primeNumber() {
    let flag = 0;
    let num = parseInt(window.prompt("enter the number"));
    for (let i = 2; i < num / 2; i++) {
        if (num % i == 0) {
            flag = 1;
        }
    }
    if (flag == 0) {
        window.alert("number is a prime number")
    } else {
        window.alert("number is not a prime number");
    }
}
//even or odd(output show on console so open console in browser)
function evenOrOdd(){
    let num = parseInt(prompt("enter the number please.."))
    if (num>0) {
        if (num%2 == 0) {
            window.console.log("number is even");
        } else {
            window.console.log("number is odd");
        }
    } else {
        window.console.warn("Number should be greater than one");
    }
}
//bubbleSort 
function bubbleSort() {
    let arr = [];
    let sizeOfArray = parseInt(prompt("enter the size of array"));
    for (let i = 0; i < sizeOfArray; i++) {
        arr[i] = parseInt(prompt("enter the array's elment "));
    }
    console.log(arr);
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i ; j++) {
            if (arr[j] > arr[j + 1]) {
                //swaping
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    document.getElementById("output").innerHTML = "shorted array are :" + arr;
}


