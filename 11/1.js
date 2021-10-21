function Vehicle(){
    this.name="nanno";
    this.color="red";
} 
const v = new Vehicle();
const v1 = new Vehicle();
v1.name="bmw";
console.log(v.name,v.color); 
console.log(v1.name,v1.color); 
/*function Vehicle(name, maker) {
    this.name = name;
    this.maker = maker;
 }
 let car1 = new Vehicle('GTR', 'Ford');
 let car2 = new Vehicle('NANO', 'TATA')
 console.log(car1.name); 
 console.log(car2.name); */