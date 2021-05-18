abstract class Car { abstract getInfo(): void; }

class BMW extends Car{
	constructor(public model: string, public year: number){
	super();
	}
	getInfo(): void{
	console.log("Model: "+ this.model + "; Year:"+ this.year);
	}
}

class Tayota extends Car{
	constructor(public model: string, public year: number){
	super();
	}
	getInfo(): void{
	console.log("Model: "+ this.model + "; Year:"+ this.year);
	}
}

class Mustang extends Car{
	constructor(public model: string, public year: number){
	super();
	}
	getInfo(): void{
	console.log("Model: " +this.model + "; Year:"+ this.year);
	}
}

let someCar1: Car = new BMW("x5", 2014);
someCar1.getInfo();

let someCar2: Car = new Tayota("qwe1", 2017);
someCar2.getInfo();

let someCar3: Car = new Mustang("rty2", 2019);
someCar3.getInfo();

let someCar11: Car = new BMW("qqq x5", 2014);
someCar1.getInfo();

let someCar12: Car = new Tayota("qqq qwe1", 2017);
someCar2.getInfo();

let someCar14: Car = new Mustang("qqq rty2", 2019);
someCar3.getInfo();