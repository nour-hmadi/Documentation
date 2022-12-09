// function nicething(){
//     document.querySelector("#image1").src = "images/image1_2.jpg";
//  }
//with this method i go to html and add onmouseover="nicething()"
//it is really a  nice thing :) :D


 var x=document.querySelector('#image1');
 x.addEventListener('mouseover',function(){
     x.src="images/image1_2.jpg";
 })


