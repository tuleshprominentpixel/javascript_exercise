import { secondclass } from './secondclass.js';
let val =new secondclass(); 
class classfirst
{
    constructor()
    {
        console.log("1 file runnning...");
    }
    static init()
    {
        console.log("1 file runnning...");
    }
}
//let c1=new classfirst();
classfirst.init();
setTimeout(function(){
    secondclass.secondclass ();
  }, 3000);
