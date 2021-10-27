var Penny=0.01;
var Nickel=0.05;
var Dime=0.1;
var Quarter=0.25;
var Dollar=1;
var FiveDollars=5;
var TenDollars=10;
var TwentyDollars=20;
var hundredDollars=100;
var status='';
var text="[";
var price=19.5;
var givenMoney=100;
var diff=sum=0;
var remain,sub,notes,mul,money;
var arr=[];
var result=result1=[];
var inCashDrawer=[];


var arr1=[['PENNY', 0], ['NICKEL', 0], ['DIME', 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
var arr2=[['PENNY', 0.01], ['NICKEL', 0.05], ['DIME', 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5.0], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]];
var a1,a2,a3,b1;
/*sub=(givenMoney-price);
money=sub;*/
function giveMeSomeChange()
{
    //console.log(arguments[2].length);
    price=arguments[0];
    givenMoney=arguments[1];
    sub=(givenMoney-price);
    money=sub;
    console.log(typeof arguments[2]);
    console.log(arguments);
    // console.log(arr);
    for(let value of Object.values(arguments[2])) {
        arr.push(value);
        //alert(value);
    }
    for(let value1 of arr)
    {
        sum+=value1[1];
    }
    console.log(sum);
    for(var i=0;i<arguments[2].length;i++)
    {
        arr1[i][1]=arr[i][1];
        //console.log(arr[i][1]);
    }
    for(i=0;i<arr1.length;i++)
    {
        
        console.log(arr1[i]);
    }

    if(givenMoney>price)
    {
        diff=givenMoney-price;
        //alert(diff);
        //for(;money>price;)
        { 
            for(i=(arr1.length-1);i>=0;i--)
            {
                if((parseFloat(money))>parseFloat((arr2[i][1])))
                {
                    mul=(money%arr[i][1])
                    notes=Math.floor(money/arr2[i][1]);
                    console.log((notes));
                    if((notes*arr2[i][1])>arr[i][1])
                    {
                        a1=arr[i][1];
                        a2=Math.round(arr[i][1]/arr2[i][1]);
                        //a2=money-arr2[i][1];
                        /*console.log(a2);*/
                        notes=a2;
                        //notes=5;
                    }
                    money-=((notes*arr2[i][1]));
                    // console.log(money);
                    //alert(sub);
                    // text+='"'+arr2[i][0]+'"'+" * "+notes+" =  "+(notes*arr2[i][1])+"";
                    text+='["'+arr2[i][0]+'",'+(notes*arr2[i][1])+"]";

                    result.push([arr2[i][0],(notes*arr2[i][1])]);
                    b1=money;
                    
                    // result[arr2[i][0]]=(notes*arr2[i][1]);
                    
                    //break;
                }
                // console.log(money);
                console.log(arr2[i][1]);
                console.log(result);
            }
            /*if(money>TwentyDollars)
            {
                mul=(money%TwentyDollars)
                notes=Math.floor(money/TwentyDollars);
                //alert(sub);
                //console.log(mul);
                text+="TwentyDollars * "+notes+" =  "+(notes*TwentyDollars);
                break;
            }
            if(money>TenDollars)
            {
                mul=(money%TwentyDollars)
                notes=Math.floor(money/TwentyDollars);
                //alert(sub);
                console.log(mul);
                text+="TenDollars * "+notes+" =  "+(notes*TenDollars);
                break;
            }*/
            //break;
        }
    }
    text+=']';
    console.log(sum);
    if(money>0)
    {
        /*console.log(money);
        console.log('INSUFFICIENT_FUNDS or CLOSED or OPEN');*/
        return  { status: "INSUFFICIENT_FUNDS", change: []};
    }
    if(sum==sub)
    {
        return  { status: 'CLOSED', change: result};
    }
    if(money==0)
    {
        return  { status: 'OPEN', change: result};
    }
    
    console.log(text);
    // console.log(arr);
    // console.log(arr1);
    console.log(money);
}
//giveMeSomeChange(1,23,)

const a=giveMeSomeChange(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);

console.log(a);
/*
(100, 200, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1000], ["FIVE", 0], ["TEN", 10], ["TWENTY", 0], ["ONE HUNDRED", 0]]);*/