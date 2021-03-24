var but = document.querySelectorAll(".drum").length;

/*var button  = document.createElement('button');
button.textContent = "click me"
document.body.append(button)
window.onkeydown = (e)=>{
    console.log("keyyuupppp", String.fromCharCode(e.keyCode))
}*/

for(var i=0; i<but; i++ ){

    document.querySelectorAll('.drum')[i].addEventListener("click",handleIt);

//but.addEventListener("click", handleIt)

function handleIt(){
     var buttons = this.innerHTML;

     makeSound(buttons);
     myAnime(buttons);
}

}

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    myAnime(event.key);

});

function makeSound(key){

    switch(key){
        case 'w': 
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;
        case 'a':
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
         case 's':
                 var tom3 = new Audio('sounds/tom-3.mp3');
                 tom3.play();
                 break;
         case 'd':
                 var tom4 = new Audio('sounds/tom-4.mp3');
                 tom4.play();
                 break;
         case 'j':
                 var crash = new Audio('sounds/crash.mp3');
                 crash.play();
                 break;
         case 'k':
             //console.log("K");
                 var kickbass = new Audio('sounds/kick-bass.mp3');
                 kickbass.play();
                 break;
         case 'l':
                 var snare = new Audio('sounds/snare.mp3');
                 snare.play();
                 break;
         default:
             console.log(buttons);
 
    }

}

function myAnime(currentKey){

        var activeBut = document.querySelector("." + currentKey);

        activeBut.classList.add("pressed");

        setTimeout(function(){
                activeBut.classList.remove("pressed");

        },100);

}

 //console.log(this);
   /* var buttons = this.innerHTML;

   switch(buttons){
       case 'w': 
               var tom1 = new Audio('sounds/tom-1.mp3');
               tom1.play();
               break;
       case 'a':
               var tom2 = new Audio('sounds/tom-2.mp3');
               tom2.play();
               break;
        case 's':
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;
        case 'd':
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;
        case 'j':
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;
        case 'k':
            //console.log("K");
                var kickbass = new Audio('sounds/kick-bass.mp3');
                kickbass.play();
                break;
        case 'l':
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
                break;
        default:
            console.log(buttons);

   }
});
}*/
