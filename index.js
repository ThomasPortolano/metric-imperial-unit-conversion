/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("inputNumber");
const convertEl = document.getElementById("convert-btn");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const weightEl = document.getElementById("weight-el");

let value = 20;

function feetConversion(num){
    let toFeet = (num * 3.281).toFixed(3)
    return toFeet
    };

function meterConversion(num){
    let toMeter = (num / 3.281).toFixed(3)
    return toMeter
}

function gallonConversion(num){
    let toGallon = (num * 0.264).toFixed(3)
    return toGallon
    };

function literConversion(num){
    let toLiter = (num / 0.264).toFixed(3)
    return toLiter
}

function poundConversion(num){
    let toPound = (num * 2.204).toFixed(3)
    return toPound
    };

function kiloConversion(num){
    let toKilo = (num / 2.204).toFixed(3)
    return toKilo
}

convertEl.addEventListener("click", function(){
    value = inputEl.value;
    lengthEl.innerHTML = `${value} meters = ${feetConversion(value)} feet | ${value} feet = ${meterConversion(value)} meters`
    volumeEl.innerHTML = `${value} liters = ${gallonConversion(value)} gallons | ${value} gallons = ${literConversion(value)} liters`
    weightEl.innerHTML = `${value} liters = ${poundConversion(value)} pounds | ${value} pound = ${kiloConversion(value)} kilos`  
})