// button stepper

var myInput = document.getElementById("my-input-val");

function stepChange(btn) 
{
    var btn_id = btn.getAttribute("id");
    var min = myInput.getAttribute("min");
    var max = myInput.getAttribute("max");
    // obtained the min and max values from the button declarations
    var stepVal = myInput.getAttribute("step");
    var val = myInput.getAttribute("value");
    var op = (btn_id=='increment')?(stepVal*1):(stepVal*(-1));
    var newVal = parseInt(val)+op;
    if(newVal>=min && newVal<=max) myInput.setAttribute("value",newVal);
}