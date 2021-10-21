class WebDev
{
    constructor(Specifications) {
        this.Specifications = Specifications;
        //this.Region = Region;
       
    }
}
class FrontEnd extends WebDev
{
    //logic;
    constructor(Specifications){
        super(Specifications);
        //this.logic = Specifications;
        this.difficulty = "easy";
        //this.printLanguage();
        /*this.printLan=function()
        {
            console.log(Specifications+" langgae is javascript")
        }*/
    }
    printlan = () => {
        //console.log(this.Specifications+"javscript");
        return this.Specifications+"javscript";
    }
    get printLanguage()
    {
        //console.log(this.Specifications+"javscript");
        return this.Specifications+"javscript";
    }
    
}

class BackEnd extends WebDev
{
    constructor(Specifications,difficulty){
        super(Specifications);
        //this.logic = Specifications;
        this.difficulty = difficulty;
       
    }
    /*constructor(Back, hard) {
        this.logic = Back;
        this.difficulty = hard;
       
    }*/
    get printLanguage()
    {
        //console.log(this.Specifications+"javscript");
        return this.Specifications+".NET";
    }
    
   
}
const w1 = new WebDev("html","gujarati");
const front1 = new FrontEnd("front-side","very easy");
const a=front1.printlan();
const back1 = new BackEnd("Back-side","very hard");
console.log(w1);
console.log(front1);
console.log(front1.printLanguage);
console.log(a);
console.log(back1);
console.log(back1.printLanguage);
