var d='hiii';
var b=123;
var c=[1,2];
var text="";
var a;
console.log(a,b,c,d);
function datatypes()
{
    text+=b +"="+ typeof(b)+" ";
    text+=c +"="+ typeof(c)+" ";
    text+=d +"="+ typeof(d)+" ";
    document.getElementById('demo').innerHTML=text;
}