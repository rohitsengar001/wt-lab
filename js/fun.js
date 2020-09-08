function getInputValue(){
    var num=document.getElementById("fname").value ;
    document.getElementById("fact").innerHTML="your factorial is :"+(fact(num)) ;
}
function fact(n) {
   
    if(n>0) {
        if (n == 1) {
            return 1;
        } else {
            return n * fact(n - 1);
        }
    }
   
}