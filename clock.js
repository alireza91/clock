const date = new Date();

let time = {
    hour: date.getHours() > 12 ? date.getHours() - 12 : date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
};

const differDegSec = 360 / 120;
const differDegMin = 360 / 60;
const differDegHour = (360 / 12) + (time.minute / 10);

let handSec = document.getElementById("handContainerSec");
let handMin = document.getElementById("handContainerMin");
let handHour = document.getElementById("handContainerHour");

let handsDeg = {
    degSecond: time.second * differDegSec,
    degMinute: time.minute * differDegMin,
    degHour: time.hour * differDegHour,
}

handSec.style.transform = `rotate(${handsDeg.degSecond}deg)`;
handMin.style.transform = `rotate(${handsDeg.degMinute}deg)`;
handHour.style.transform = `rotate(${handsDeg.degHour}deg)`;

setInterval(function () {
    handsDeg.degSecond += differDegSec;
    if (handsDeg.degSecond > 359) {
        handsDeg.degSecond = 0;
        handsDeg.degMinute += differDegMin;
        if (handsDeg.degMinute > 359) {
            handsDeg.degMinute = 0;
        }
        handsDeg.degHour += 36;
    }
    handSec.style.transform = `rotate(${handsDeg.degSecond}deg)`;
    handMin.style.transform = `rotate(${handsDeg.degMinute}deg)`;
    handHour.style.transform = `rotate(${handsDeg.degHour}deg)`;
}, 1000);

