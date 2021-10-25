function changeFunc() 
{
    var selectBox = document.getElementById("language");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    alert("select language is "+selectedValue);
}