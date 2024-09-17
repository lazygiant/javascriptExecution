let Teacher=
{
   name: "BKJ",
   sub: "Selenium",
   timing: "7:00 am",
   strength: 100,

   teaching : function()
   {
     console.log("loves to teach youngster");
   },

   revision : function()
   {
     console.log("NEEDED");
   }
};


console.log(Teacher.revision());
console.log(Teacher.teaching());