function myValidate(){
    let fname=document.getElementById('fname').value;
    if (fname == "" ) {
        console.log("name is required")
    }
    if (fname.length < 4) {
        console.warn("number can't be expected");
    }
}