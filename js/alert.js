/*there are three types of alerts in js given below */

//new way to declare a function
let showalert=()=>{
    alert("this is showalert function...");
}

//window is optional to write here
function confirmAlert(){
    let val=window.confirm("this is confirmation alert");
    if (val==true) {
        window.alert("welcome to confirm page");
    } else {
        window.alert("you are not welcome");
    }
}
function promtAlert(){
    let val=window.confirm("this promtAlert so press oj to enter your name");
    if (val==true) {
       let name= window.prompt("please enter your name");
        document.write("Welcome "+name);
    } else {
        document.write("thank you for calling promAlert function");
    }
}