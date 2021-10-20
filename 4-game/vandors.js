//var num=prompt("Please enter your number", "123");
var d='hiii';
var b=100;
var c=[1,2];

a=0;
for(var i=0;i<15;i++)
{
    for(var j=0;j<17;j++)
    {
        if(i==5||i==3||i==4)
        {
            if(j==0||j==1||j==2||j==3)
            {
                document.write("o");
            }
        }
        else if(i==11||i==9||i==10)
        {
            if(j==8||j==9||j==10||j==7)
            {
                document.write("o");
            }
            else
            {
                document.write("&nbsp ");
            }
        }

        else
        {
            document.write("o");
        }
        
    }
    document.write("<br>");
}