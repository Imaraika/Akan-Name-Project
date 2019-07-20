## Akan-Name-Project
## By Ange Ingabire
to calculate the day you were born and display the Akan name According to your day of Birth and your gender!

## Table of contents
* [General info](#generalinfo)
* [Technologies](#technologies)
* [Setup](#setup)
* [BDD](#dbb)
* [Input](#input)
* [Output](#output)
* [Code Examples](#codeexamples)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)
* [Licence](#licence)


## General info
This project is called Akan-Name-Project, The Akan people of Ghana frequently name their children after the day of the week they were born 
and the order in which they were born.and as we all know so many people they likely to know the date of the birth,month and the year was born.
but not an exact day they were born on , this project is going to help them to find the day they were born on and give them the Akan name 
if you were a ghnanian was to be called the akan name according to persorn's gender.
	
## Technologies
Project is created with:
* javascript 
* CSS
* HTML5
	
## Setup
To run this project, install it locally using git clone:
these are some git command you may use
$ cd ../git init 
$ git clone https/Imaraika.github/Akan-Name-Project.git

## BDD
### Behavior
- Please Enter your Name 
- Enter your birth date accordingly (the date , mounth and Year)
- select your Gender
- then After click On A button to see your Akana name and the day you were born.
### Input
- Name
- Day mounth, year
- Male or Female
![Example screenshot](../Akan/images/inputscreenshot.png)
### Output
- Day of birth
- Akan name 
![Example screenshot](../Akan/images/outputscreetsht.png) 

## Code Examples
 var DD =parseFloat(document.getElementById("dd").value);
 var MM =parseFloat(document.getElementById("mm").value);
 var YY =parseFloat(document.getElementById("yy").value);
 var CC =  (YY-1)/100+1;
 var dayOFTheWeek=( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
 
## Status
this Project is done and you can use it if you want 

## Inspiration
My All Credits goes to Moringa School Technical Mentors especially Aristote the TM who Always guide us and share with us more and more 
in Programming. 

## Contact
created By inange2013@gmail.com feel free to contact me!

## Licence
Copyright 2019 Ange Ingabire
you may not use this file except in compliance with the License.
