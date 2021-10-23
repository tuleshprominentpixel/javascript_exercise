/*var hello="Hii How are you";
var newstring="";
//alert(newstring);
for(let i=1;i<(hello.length-1);i++)
{
    newstring+=hello[i];
}
console.log(hello);
console.log(newstring);
*/

let text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';
const obj = JSON.parse(text);

//  document.getElementById("demo").innerHTML =obj.employees[1].firstName + " " + obj.employees[1].lastName;
//obj.employees[1].firstName + " " + obj.employees[1].lastName;

for(var i=0;i<3;i++)
{
    document.getElementById("demo").innerHTML +=obj.employees[i].firstName + " " + obj.employees[i].lastName+"<br>";
}
