let menuBoton= document.querySelector('.boton-nav');
let menu= document.querySelector('.menu');
let flag=false;

menu.style.display="none";

menuBoton.addEventListener('click',()=>{
    if(flag=== false){
       flag=true;
        menu.style.display="flex"; 
    }else{
        menu.style.display="none";
        flag=false;
    }
   
})

menu.addEventListener('click',()=>{
    menu.style.display="none";
 
})