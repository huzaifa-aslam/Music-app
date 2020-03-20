var divLength = document.querySelectorAll(".music").length
for (var i = 0; i < divLength; i++) {
    var mydiv = document.querySelectorAll(".music")[i];
    mydiv.addEventListener("click", playSong);
    var mydiv = document.querySelectorAll(".music")[i];
    mydiv.addEventListener("dblclick", pauseSong);
}

var music1 = new Audio();
music1.src = "audio/audio1.mp3";
var music2 = new Audio();
music2.src = "audio/audio2.mp3";
var music3 = new Audio();
music3.src = "audio/audio3.mp3";


function playSong() {

    var songId = this.innerHTML;
    switch (songId) {
        case "a":
            music1.play();
            break;
        case "b":
            music2.play();
            break;
        case "c":
            music3.play();
            break;
        case "a":
            music1.play();
            break;
        case "b":
            music2.play();
            break;
        case "c":
            music3.play();
            break;

        case "a":
            music1.play();
            break;
        case "b":
            music2.play();
            break;
        case "c":
            music3.play();
            break;

        case "a":
            music1.play();
            break;
        case "b":
            music2.play();
            break;
        case "c":
            music3.play();
            break;

        case "a":
            music1.play();
            break;
        case "b":
            music2.play();
            break;
        case "c":
            music3.play();
            break;

        case "a":
            music1.play();
            break;
        case "b":
            music2.play();
            break;
        case "c":
            music3.play();
            break;

        case "a":
            music1.play();
            break;
        case "b":
            music2.play();
            break;
        case "c":
            music3.play();
            break;


        default:
            console.log(`wrong input`);
            break;
    }
}

function pauseSong() {
    var songId = this.innerHTML;
    switch (songId) {
        case "a":
            music1.pause();
            break;
        case "b":
            music2.pause();
            break;
        case "c":
            music3.pause();
            break;
        case "a":
            music1.pause();
            break;
        case "b":
            music2.pause();
            break;
        case "c":
            music3.pause();
            break;

        case "a":
            music1.pause();
            break;
        case "b":
            music2.pause();
            break;
        case "c":
            music3.pause();
            break;

        case "a":
            music1.pause();
            break;
        case "b":
            music2.pause();
            break;
        case "c":
            music3.play();
            break;

        case "a":
            music1.pause();
            break;
        case "b":
            music2.pause();
            break;
        case "c":
            music3.pause();
            break;

        case "a":
            music1.pause();
            break;
        case "b":
            music2.pause();
            break;
        case "c":
            music3.pause();
            break;

        case "a":
            music1.pause();
            break;
        case "b":
            music2.pause();
            break;
        case "c":
            music3.pause();
            break;


        default:
            console.log(`wrong input`);
            break;
    }

}