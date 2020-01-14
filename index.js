var myImages =["https://i.pinimg.com/originals/21/64/df/2164df11e637d6bac9b6d722cb0d3c8a.jpg",
               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWQEdRL9nNp6Jn7U8V8G0ENh0XiRI9PHPR0Mew2gm3igpwd5cV5A",
               "http://cdn3.theeventchronicle.com/wp-content/uploads/2014/09/dolphin-intelligence.jpg",
               "https://petsymptoms.com/wp-content/uploads/2017/05/bulldog-big-dog-breeds-px.jpg",
               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRumx_mPDuB86EkgYsg-9QJb6p4uvp4XEwo1e_u5rAhx9sqbcLSag"];


var captionImages =["BOB","BILLY","PENELOPE","LEO","RUBY"];

 var index=0; 

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 

function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 

function autoSlide(){
  if (document.getElementById("auto").checked)
    next(); 
}


setInterval(autoSlide,2000); // Next