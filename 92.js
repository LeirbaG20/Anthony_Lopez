// Create an object:
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName+" "+this.id;
    },
    age: function (param) {
        return "My age is: " + param;
    }
};
document.getElementById("demo1").innerHTML= person.firstName;
document.getElementById("demo2").innerHTML= person.lastName;
document.getElementById("demo3").innerHTML= person.id;
document.getElementById("demo4").innerHTML= person.fullName();
document.getElementById("demo5").innerHTML= person.age(55);


