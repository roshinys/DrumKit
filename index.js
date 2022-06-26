for(var i = 0;i<document.querySelectorAll("button").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var e = this.innerHTML;
        console.log(e);
        eventHappened(e);
    })
}
function eventHappened(e){
    var audio;
    switch(e){
            case "w":
                audio = new Audio("./sounds/tom-1.mp3");
                audio.play();
                break;
            case "a":
                audio = new Audio("./sounds/tom-2.mp3");
                audio.play();
                break;
            case "s":
                audio = new Audio("./sounds/tom-3.mp3");
                audio.play();
                break;
            case "d":
                audio = new Audio("./sounds/tom-4.mp3");
                audio.play();
                break;
            case "j":
                audio = new Audio("./sounds/snare.mp3");
                audio.play();
                break;
            case "k":
                audio = new Audio("./sounds/kick-bass.mp3");
                audio.play();
                break;
            case "l":
                audio = new Audio("./sounds/crash.mp3");
                audio.play();
                break;
            default:
                console.log("ok");
        }
}

addEventListener("keypress",function(event){
    eventHappened(event.key);
})