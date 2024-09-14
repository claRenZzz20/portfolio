const display = document.getElementById("screen");

function screendisplay(input){
    display.value += input; 
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value  = eval(display.value);
    }
    catch{
        display.value = "Syntax Error";
    }
}