function getpara1(){
var inputs= [];
for (i=1 ; i<6; i++){
    inputs.push(document.getElementById("para1_input_box_"+ i).value)
}
document.getElementById("para1").innerHTML = inputs.join(".")
}