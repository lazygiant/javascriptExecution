let ar = [23, 12, 11, 66];
let sum = 0;
for(let x = 0 ; x < ar.length ; x++)
{
    if(ar[x]%2==0)
    {
     sum += ar[x];
    console.log(ar[x]);
    }
}
console.log("TOTAL even no sum:->  "+sum);


let Student =
{
    name : "Naveen g",
    id : 101,
    place : "Uganda",
    read : function()
    {
        console.log("must read..");
    },

    play : function(a)
    {
        return "playing helps to set the mind";
    }
}

let id = Student.id;
console.log(id);

console.log(Student.read());

let play = Student.play(1);
console.log("interested in "+play);

for(let m in Student)
{
    console.log(m+" "+Student[m]);
}