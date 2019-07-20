function akanFunction(){
 var gender = document.getElementById('selector').value;
 var arrayDay = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','saturday'];
 var arrayAkanMale = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
 var arrayAkanFemale = ['Akosua','Adwoa','Abenaa','Akau','Yaa','Afua','Ama'];
 var arrayAkanRes= [0,1,2,3,4,5,6];
 var firstName = document.getElementById("fname").value;
 var DD =parseFloat(document.getElementById("dd").value);
 var MM =parseFloat(document.getElementById("mm").value);
 var YY =parseFloat(document.getElementById("yy").value);
 var CC =  (YY-1)/100+1;
 var dayOFTheWeek=( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
 
 console.log(firstName);
 
  if ( Math.round(dayOFTheWeek)== arrayAkanRes[Math.round(dayOFTheWeek)] && gender == "male"){
    document.getElementById('day').innerHTML ="You were Born On :"+ arrayDay[Math.round(dayOFTheWeek)];
    document.getElementById('akaname').innerHTML ="And your Akan Name is : " + "" + arrayAkanMale[Math.round(dayOFTheWeek)];
}

    else if(Math.round(dayOFTheWeek)== arrayAkanRes[Math.round(dayOFTheWeek)] && gender == "female" ){
    console.log(arrayDay[Math.round(dayOFTheWeek)]);
    document.getElementById('day').innerHTML ="You were Born On :"+" "+ arrayDay[Math.round(dayOFTheWeek)];
    document.getElementById('akaname').innerHTML ="And Your Akan Name is:"+" "+ arrayAkanFemale[Math.round(dayOFTheWeek)];
}
else 
{
    document.getElementById("day").innerHTML = "Please Enter the valid information"
}
document.getElementById('firstn').innerHTML ="Dear"+" "+firstName;
} 