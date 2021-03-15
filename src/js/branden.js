import {
    Car
} from "/src/js/Car.js";

import {
    newCar
} from "/src/js/app.js";



let pimpEnabled = false;
function logKey(e) {
    if(e.code == "KeyB" && !pimpEnabled){
        console.log(e.code);
        pimpEnabled = true;
        pimpMyRide();
    }
}


function pimpMyRide() {
    new Audio("https://bigsoundbank.com/UPLOAD/mp3/0600.mp3").play();
    while(newCar.speed < 1000) {
        newCar.speed += 10;

    }

    new Audio("/src/car-crash-sound-eefect.mp3").play();
    newCar.speed = -1;


}