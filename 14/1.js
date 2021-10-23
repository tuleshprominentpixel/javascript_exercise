
let num1=document.getElementById("num1");
let num2=document.getElementById("num2");
function btnPlus()
{
    var val1=num1.value;
    var val2=num2.value;

    var result= +val1+ +val2;
    alert(result);
}
function btnsub()
{
    var val1=num1.value;
    var val2=num2.value;

    var result= +val1+ -val2;
    alert(result);
}
function btnmul()
{
    var val1=num1.value;
    var val2=num2.value;

    var result= (+val1* +val2);
    alert(result);
}
function btndiv()
{
    var val1=num1.value;
    var val2=num2.value;

    var result= (+val1/ +val2);
    alert(result);
}
