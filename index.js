let out=document.getElementById("output-screen");
function display(num){
    out.value+=num;
}
function calculate(){
    try{
        out.value=eval(out.value);
    }
    catch(err){
        alert("Invalid number")
    }
}
function Clear(){
    out.value= "";
}
function del(){
    out.value=out.value.slice(0,-1);
}


