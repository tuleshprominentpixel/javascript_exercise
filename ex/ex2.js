var Penny=0.01;
var Nickel=0.05;
var Dime=0.1;
var Quarter=0.25;
var Dollar=1;
var FiveDollars=5;
var TenDollars=10;
var TwentyDollars=20;
var hundredDollars=100;
var status=text='';
var price=19.5;
var givenmoney=100;
var diff=0;
var remain,sub,notes,mul,money;
var arr=[];
var arr1=[['PENNY', 0], ['NICKEL', 0], ['DIME', 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
var arr2=[['PENNY', 0.01], ['NICKEL', 0.05], ['DIME', 0.1], ["QUARTER", 0.25], ["ONE", 1], ["FIVE", 5.0], ["TEN", 10], ["TWENTY", 20], ["ONE HUNDRED", 100]];
var a1,a2,a3;
/*sub=(givenmoney-price);
money=sub;*/
function giveMeSomeChange()
{
    //console.log(arguments[2].length);
    price=arguments[0];
    givenmoney=arguments[1];
    sub=(givenmoney-price);
    money=sub;
    console.log(typeof arguments[2]);
    console.log(arguments);
    for(let value of Object.values(arguments[2])) {
        arr.push(value);
        //alert(value);
    }
    for(var i=0;i<arguments[2].length;i++)
    {
        arr1[i][1]=arr[i][1];
        //console.log(arr[i][1]);
    }
    for(i=0;i<arr1.length;i++)
    {
        
        console.log(arr1[i]);
    }

    if(givenmoney>price)
    {
        diff=givenmoney-price;
        //alert(diff);
        for(;money>price;)
        { 
            for(i=(arr1.length-1);i>=0;i--)
            {
                if(money>arr2[i][1])
                {
                    mul=(money%arr[i][1])
                    notes=Math.floor(money/arr[i][1]);
                    console.log(mul);
                    if((notes*arr[i][1])>10)
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
                    text+=arr2[i][1]+" * "+notes+" =  "+(notes*arr2[i][1])+"\n";
                    //break;
                }
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
            break;
        }
    }
    if(money!=0)
    {
        console.log(money);
        console.log('INSUFFICIENT_FUNDS or CLOSED or OPEN');
    }
    console.log(text);
    // console.log(arr);
    // console.log(arr1);
    console.log(money);
}
//giveMeSomeChange(1,23,)