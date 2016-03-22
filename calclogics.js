/**
 * Created by deepak on 22/3/16.
 */
window.addEventListener("load",init);
function init()
{

var buttonArray=document.getElementsByTagName("button");
for(var i=0;i<buttonArray.length;i++)
{
    buttonArray[i].addEventListener("click",doOperation);

}
}

function doOperation() {

    var result=0;
    var firstNo=document.getElementById("firstNo").value;
    var secondNo=document.getElementById("secondNo").value;
   var operation = this.getAttribute("data-operation");


    if (operation === "clear") {
        var textArray = document.getElementsByTagName("input");
        //console.log("reset");
        //console.log(textArray);
        for (var i = 0; i < textArray.length; i++) {
            // console.log(document.getElementsByTagName("input")[i].value);
            document.getElementsByTagName("input")[i].value = "";
        }
    }
    else {


        var expression = firstNo + operation + secondNo;
        console.log("expression is", expression);
        result = eval(expression);
        document.getElementById("result").innerHTML = result;
    }
    /*
     result = calcObject[this.getAttribute("data-operation")](firstNo,secondNo);
     if(this.innerHTML==="Add"){
     result = calcObject.add(firstNo,secondNo);
     }
     else
     if(this.innerHTML==="Subtract"){
     result = calcObject.subtract(firstNo,secondNo);
     }*/

}