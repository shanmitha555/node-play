const person = {
    name: "Shan",
    age: 48,
    greet() {
        console.log("Hi, I am " + this.name);
    }
}

person.greet();