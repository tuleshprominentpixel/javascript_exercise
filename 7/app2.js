
var str="";
var a=1;
function addparagraph()
{
    var tag = document.createElement("p");
   var text = document.createTextNode("line "+a+"");
   tag.style.color=getRndInteger(000000,999999);
   a++;
   tag.appendChild(text);
   var element = document.getElementById("padd");
   element.appendChild(tag);
    /*var p1=document.getElementById("padd");
    var newpara=document.createElement("p");
    var p2="line "+a+" <br>";
    a++;
    p1.style.color=getRndInteger(000000,999999);
    str+=p2;
    document.getElementById("demo").innerHTML=str;*/
}
function getRndInteger(min, max) 
{
    return Math.floor(Math.random() * (max - min)) + min;
}
