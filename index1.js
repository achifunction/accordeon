"use strict"
let panel = document.getElementsByClassName("span")    
let content = document.getElementsByClassName("text")
let panelbox = document.getElementsByClassName("smallpanel")
let arrow = document.getElementsByClassName("arrow")

for( let i =0; i< panel.length; i++){
    panel[i].addEventListener("click",function(){
     panel[i].children[0].classList.toggle("text");
     panel[i].classList.toggle("span1");
     
    })
}
for( let j =0; j< panelbox.length; j++){
    panelbox[j].addEventListener("click",function(){
     panelbox[j].classList.toggle("smallpanel-activ");
    })
 
};

for( let x=0; x<arrow.length; x++){
    arrow[x].addEventListener("click",function(){
    arrow[x].classList.toggle("arrow-activ");

    })
}













































































