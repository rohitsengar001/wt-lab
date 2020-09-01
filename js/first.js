let message="this is global variable";
function myFunction()
{
    var message="function is running";
    document.getElementById("para").innerHTML=message;
    
}

function addTwoNumber()
{
    let n1= Number(window.prompt("Enter the first number"));
    let n2=Number(window.prompt("enter the second number"));
    let sum = n1 + n2;
    document.getElementById("sum").innerHTML="sum is :"+sum;
}

