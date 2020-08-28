let message="this is global variable";
function myFunction()
{
    var message="function is running";
    document.getElementById("para").innerHTML=message;
    
}