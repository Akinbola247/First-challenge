

function show_hide() {  
    var click = document.getElementById("list-items");  
    if(click.style.display ==="none") {  
       click.style.display ="block";  
    } else {  
       click.style.display ="none";  
    }   
 }  

 document.querySelector(".home").addEventListener("click", function(){
    alert("You are on the homepage");
 });
 
 
 