class Cylinder
{
    //number=1/3;
    pi=22/7;
    r=5;
    h=10;
    volume()
    {
        return (this.pi*this.r*this.r*this.h).toFixed(4);
    }
}
var c1=new Cylinder();

console.log(c1.volume());

//console.log(c1);
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