
var str="";
var a=1;

for(i=0;i<5;i++)
{
    for(var j=0;j<=i;j++)
    {
        str+="* ";
    }
    str+="<br>";
}
//console.log(str);
//alert(str);
document.getElementById("demo").innerHTML=str;
