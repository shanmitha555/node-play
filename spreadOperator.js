const person = {
    name1: "max",
    age: 31,
    greet(){
        console.log(`Hi I am ${this.name1} and is of age ${this.age}`)
    }
}

//spreading an object
const john = {...person};
//console.log(`spread object ${john.name1} and age is ${john.age}`);

//one way of calling an object's properties
const someone = (person) => {
    return ([person.name1, person.age]);
}
//console.log(someone(john));

//slicing an array
const cities = ["Chennai", "Hyderabad"];
const slicedCities = cities.slice();
//console.log(slicedCities);

//spreading an array
const spreadCities = [...cities];
//console.log(spreadCities);

//person.greet();
//console.log(`outside of greet ${person.name1} and ${person.age}`);