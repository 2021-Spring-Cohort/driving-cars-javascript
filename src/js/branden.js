import {
    Car
} from "/src/js/Car.js";

import {
    newCar
} from "/src/js/app.js";

import {
    updateDashBoard
} from "/src/js/app.js"


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

document.body.addEventListener('keydown', logKey);

let pimpEnabled = false;
function logKey(e) {
    if(e.code == "KeyB" && !pimpEnabled){
        console.log(e.code);
        pimpEnabled = true;
        pimpMyRide();
    }
}


async function pimpMyRide() {
    new Audio("https://bigsoundbank.com/UPLOAD/mp3/0600.mp3").play();
    while(newCar.speed < 1000) {
        newCar.accelerate()
        updateDashBoard(newCar);
        await sleep(50);

    }

    
    new Audio("/src/car-crash-sound-eefect.mp3").play();
    await sleep(50);
    newCar.stop();
    updateDashBoard(newCar);


}