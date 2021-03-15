import {
    Car
} from "/src/js/Car.js";


let pimpEnabled = false;
function logKey(e) {
    if(e.code == "KeyB" && !pimpEnabled){
        console.log(e.code);
        pimpEnabled = true;
        pimpMyRide();
    }
}


function pimpMyRide() {

}