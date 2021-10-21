class car
{
    name="BMW";
    model="B1";
    weight="2500";
    color="red";
    start= ()=>{
        return "car starting";
    }
    drive= ()=>{
        return "car driving";
    }
    brake= ()=>{
        return "car braking";
    }
    stop= ()=>{
        return "car stopping";
    }
}
var c1=new car();
console.log(c1.start());
console.log(c1.drive());
console.log(c1.brake());
console.log(c1.stop());
console.log(c1);
/*function Vehicle(name, maker) {
    this.name = name;
    this.maker = maker;
 }
 let car1 = new Vehicle('GTR', 'Ford');
 let car2 = new Vehicle('NANO', 'TATA');

 Vehicle.prototype.greet = function() {
    console.log('car name is=' + ' ' +  this.name);
}
car1.greet();
car2.greet();
 console.log(car1.name); 
 console.log(car2.name); 
 */