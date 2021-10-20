var num=prompt("Please enter your number", "123");
var d='hiii';
var b=100;
var c=[1,2];
var text="";
var a;
console.log(a,b,c,d);
function datatypes()
{
    a=456;
    b+=50;
    c.push(b);
    d="tulesh";
    console.log(a,b,c,d);
    document.getElementById('demo').innerHTML=text;
}
a=0;
for(var i=0;i<num;i++)
{
    for(var j=0;j<=i;j++)
    {
        document.write(++a + " ");
    }
    document.write("<br>");
}