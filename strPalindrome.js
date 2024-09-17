let st = "madam";
let st1 = "";

for(let x = st.length-1 ; x >=0 ; x--)
{
   st1 = st.charAt(x);
}


if(st.match(st1))
{
   console.log("hey buddy");
}