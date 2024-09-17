let Employess=
{
    empname : "scott",
    empId : 1023,
    job : "QA Engineer",
    basicSal : 50000,

    bonus : function()
    {
       return (this.basicSal * .1);
    }
};

let happy = Employess.bonus();

console.log(happy);