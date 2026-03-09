function convert(){

let km = Number(document.getElementById("km").value);

let miles = km * 0.621371;

document.getElementById("result").innerHTML =
miles.toFixed(2) + " Miles";

}