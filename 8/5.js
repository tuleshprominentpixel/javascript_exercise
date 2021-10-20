var str="teuleshpatel";
var arr2=[10,8,2,66,88,11,110,600];
var str2=[];
var temp=0;
    
function findMax() 
{
    var arg1=arguments[0];
    //console.log(arguments);
    //alert(arg1);
    for(var i=0;i<arguments.length;i++)
    {
        if((parseInt(arg1))<(parseInt(arguments[i])))
        {   
            temp=arg1;
            arg1=arguments[i];
            arguments[i]=temp;

            temp =arg1;
            arg1=arr2[i];
            arr2[i]=temp;
            //console.log(arg1+ " "+i);
        }
    }
    console.log("max number is:"+arg1);
}
//console.log(arr1);
var a1=findMax(...arr2);
//console.log(arr2);
//console.log(findMax(...arr1));
//var sortarr=findMax(...findMax)
/*console.log(str2);
console.log(text);*/