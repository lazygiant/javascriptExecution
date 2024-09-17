let animal = {

    name : "cat",
    price : 7899999,
    color : "mad black",
    weight : "3 Kgs"
};

for(let x in animal)
{
   // console.log(x); // print only property name
   // console.log(animal[x]); // print only values of properties

    console.log(x+" "+animal[x]);
}