let x = 121;
let temp = 121 ;
let act = 0;


while(x!=0)
{
    let rem = x%10;
    act = act*10+rem;
    x = Math.floor(x/10);
    console.log(act);
}

if(temp == act)
{
    console.log("no is palindrome "+temp);
}
else
{
    console.log("not");
}