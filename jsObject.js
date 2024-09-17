let person=
{
    fname : "Bikku",
    lname : "Matre",
    age : 23,
    salary : 0,
    weight : 90
}

person.lname="Jha";

// Accessing the Object property
console.log(person["age"]);
console.log(person.lname);

//delete property from the obj
//delete person[salary];
//console.log(person[salary]);

//for/in loop used to get the property from the object

console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

for(let x in person)
{
    console.log(x); // prints only property name
}