

function hello()
{
    var w = window.open();
    w.document.open();
    w.document.write("<h2>Hello World!</h2>");
    w.document.close();
}
