function akanFunction(){
 var name = "kwasi" ;
 var gender = document.getElementById("gend").value;
 var arrayDay = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','saturday'];
 var arrayAkanMale = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
 var arrayAkanFemale = ['Akosua','Adwoa','Abenaa','Akau','Yaa','Afua','Ama'];
//   var arrayAkan = [0,1,2,3,4,5,6];
// var male = document.getElementById("m").value;
//  var female = document.getElementById("f").value;
 var DD =parseFloat(document.getElementById("dd").value);
 var MM =parseFloat(document.getElementById("mm").value);
 var YY =parseFloat(document.getElementById("yy").value);
 var CC =  (YY-1)/100+1;
 var dayOFTheWeek=( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
 
 

 if ( (arrayAkanMale[Math.round(dayOFTheWeek)]) && (gender == "Male")){
  console.log(arrayDay[Math.round(dayOFTheWeek)]);
  document.getElementById("day").innerHTML =arrayDay[Math.round(dayOFTheWeek)];
  document.getElementById("akaname").innerHTML = arrayAkanMale[Math.round(dayOFTheWeek)];
 }
}