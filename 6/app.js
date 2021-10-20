var d='hiii';
var b=100;
var c=[1,2];
var text="";
var a="";
//console.log(a,b,c,d);
//a=inputuser.value;

function square()
{
    //alert(document.getElementById("text1").innerHTML);
    inputuser=document.form1.text1.value;
    //alert(inputuser);
    a=sqauresecond(inputuser);
    console.log(a);
    document.getElementById("demo").innerHTML=a;
}
function sqauresecond(inuser)
{
    return inuser*inuser;
}