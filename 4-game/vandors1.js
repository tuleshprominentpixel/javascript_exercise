//var num=prompt("Please enter your number", "123");
var d=0;
var b=7;
var c=[1,2];
var str="";
var a=17;
var spacecount=0;
for(var i=0;i<b;i++)
{
    d=i;
    if(i%2==0)
    {
        for(var j=0;j<3;j++)
        {
            for(var k=0;k<17;k++)
            {
                str+="0";    
            }
            str+="<br>";
        }
        
    }
    else
    {
        for(var j=0;j<3;j++)
        {
            for(var kl=0;kl<(spacecount*6);kl++)
            {
                str+="&nbsp ";
                //str+="<br>";
            }
            for(var m=0;m<4;m++)
            {
                str+="o";

            }
            str+="<br>";
        }

        spacecount++;
        //str+="<br>";
    }   
        
            //document.write("<br>");
            

            //break;
        
        /*if(i<6 && i>3)
        {
            if(j>6 && j<11)
            {
                document.write("o");
            }
            
        }
        else if(i<12 && i>8)
        {
            if(j>6 && j<11)
            {
                document.write("o");
            }
            else
            {
                document.write("&nbsp ");
            }
        }
        else if(i<18 && i>14)
        {
             if(j>12 && j<17)
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
        }*/
        
    //}
    document.write("<br>");
}
document.write(str);
demo.value=str;