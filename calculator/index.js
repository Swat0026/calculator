function numbuttons(e){
    calcform.layout.value+=e.value;

}
function Reset(){
    calcform.layout.value = null;
}
function Calculate(){
    calcform.layout.value = eval(calcform.layout.value);
}