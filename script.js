const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function calculateAge(){
const dateofBirth=document.getElementById("date_of_birth").value;
  const givenDate=document.getElementById("given_date").value;
  
  let startDate=new Date(dateofBirth);
  let endDate=new Date(givenDate);
  
  let dobYear=startDate.getFullYear();
  let dobMonth=startDate.getMonth()+1;
  let dobDate=startDate.getDate();
  
  let givenYear=endDate.getFullYear();
  let givenMonth=endDate.getMonth()+1;
  let givenDate1=endDate.getDate();
  
  
  leapyear(givenYear);
  
  if(dobYear > givenYear || (dobMonth > givenMonth && dobYear === givenYear) ||  (dobDate > givenDate1 && dobMonth === givenMonth && dobYear === givenYear)
  ){
         alert("not valid!!!");
        return;
     }
    

let diffYear=givenYear-dobYear;

let diffMonth;
let days;
if(givenMonth >= dobMonth)
  {
    diffMonth = givenMonth - dobMonth;
  }
else{
   diffYear--;
  diffMonth = 12 + givenMonth - dobMonth;
}
if(givenDate1 >= dobDate)
  {
    diffDate = givenDate1 - dobDate;
  }
else{
  diffMonth--;
  days = month[givenMonth - 2];
  diffDate = days + givenDate1 - dobDate;
  if(diffMonth < 0)
    {
      diffMonth = 11;
      diffYear--;
    }
}

showResult(diffYear, diffMonth, diffDate);
}
const showResult= (totalYears, totalMonths, totalDays) =>{
  document.getElementById("years").textContent= `${totalYears} Year(s)`;
  document.getElementById("months").textContent= `${totalMonths} Month(s)`;
  document.getElementById("days").textContent= `${totalDays} Day(s)`;
  document.getElementById("output_box").style.display="flex";
  document.getElementById("msg").style.display="block";
  
}

function leapyear(year)
{
  if((year % 4 == 0) && (year % 100 != 0) || (year % 400 ==0))
    {
      month[1]=29;
    }
  else
    {
month[1]=28;
    }
}
