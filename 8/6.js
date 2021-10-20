var results = [];
var results1 = [];
var x = [10,8,5,66,88,15,110,60]; 
var y=minMax(x);
console.log("min value ="+y[0]);
var z=(results.length-1);
console.log("max value ="+y[z]);

function minMax(params) {
    var arg1=params[0];
    var arg2=params[0];
    for(var i=0;i<params.length;i++)
    {
        if((parseInt(arg1))<(parseInt(params[i])))
        {   
            temp=arg1;
            arg1=params[i];
            params[i]=temp;
            //results.push(arguments[i]);
            results.push(arg1);
            //results.shift(params[i]);
            //console.log(arg1+ " "+i);
        }
        if((parseInt(arg2))>(parseInt(params[i])))
        {   
            temp=arg2;
            arg2=params[i];
            params[i]=temp;
            //results.push(arguments[i]);
            results.unshift(arg2);
            //console.log(arg1+ " "+i);
        }
        //results.push(params[i]);
    }
  for (i=0; i<params.length; i++) {
    //console.log(params[i])
  }
  return(results)
}
/*var str="teuleshpatel";
var arr2=[10,8,2,66,88,11,110,60];
var str2=[];
var temp=0;
    
function findMax() 
{
    var arg1=arguments[0];
    var arg2=arguments[0];
    //console.log(arguments);
    //alert(arg1);
    var results = [];
    for(var i=0;i<arguments.length;i++)
    {
        if((parseInt(arg1))<(parseInt(arguments[i])))
        {   
            temp=arg1;
            arg1=arguments[i];
            arguments[i]=temp;
            //results.push(arguments[i]);
            //results.push(arg1);
            //console.log(arg1+ " "+i);
        }
        results.push(arguments[i]);
    }
    console.log(results);
    //console.log("max number is:"+arg1);
    return(results);
}
//console.log(arr1);
var a1=findMax(arr2);*/
//console.log(a1);
//console.log(findMax(...arr1));
//var sortarr=findMax(...findMax)
/*console.log(str2);
console.log(text);*/