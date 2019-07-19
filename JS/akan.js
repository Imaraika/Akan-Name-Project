function akanFunction(){
 var name ;
 var arrayAkan = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','saturday'];
 var gender;
 var DD =parseFloat(document.getElementById("dd").value);
 var MM =parseFloat(document.getElementById("mm").value);
 var YY =parseFloat(document.getElementById("yy").value);
 var CC =  (YY-1)/100+1;
 var dayOFTheWeek=( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
 document.getElementById("demo").innerHTML =Math.round(dayOFTheWeek);
 if (dayOFTheWeek == arrayAkan[0] && gender == "female"){
    console.log('kwasi')
}
}