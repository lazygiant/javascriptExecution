let str = "madam";
let rev = "";


for(let i = str.length-1 ; i>=0 ; i--)
{
    rev += str.charAt(i);
}
console.log(rev);
if(rev===str)
{
    console.log("PALINDROME");
} 
else
{
    console.log("NOT PALINDROME");
}

let s1 = "sachin";
s1=s1.concat(" tendulkar");
s1=s1.toUpperCase();

var status1 = s1.endsWith("KAR");
console.log(status1);