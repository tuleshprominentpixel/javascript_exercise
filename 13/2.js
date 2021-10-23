var p1=document.getElementById("gt");
var parenele=document.getElementById("gt").parentElement;

var dist;

var a1=p1.offsetTop;

dist=a1;

console.log(parenele.offsetTop);

var a1=p1.offsetTop;
console.log(a1);
p1.scrollTo(0,50);
function scrollByBtn()
{
    p1.scrollBy(0,50);
}