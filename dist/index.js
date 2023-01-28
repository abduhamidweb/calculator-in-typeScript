"use strict";
const val = document.querySelector("#result");
const input1 = document.querySelector("#first");
const input2 = document.querySelector("#second");
const elBtnPluse = document.querySelector("#plus");
const elBtnmultication = document.querySelector("#multiplication");
const elBtnMinuse = document.querySelector("#minus");
const elBtnDivision = document.querySelector("#division");
const elBtnClear = document.querySelector("#clear");
elBtnClear.addEventListener("click", () => {
    val.innerHTML = "0";
});
// Calculator  automatic
function addition(a, b) {
    return a + b;
}
// console.log(addition(12, 12));//24:number
elBtnPluse.addEventListener("click", () => {
    val.innerHTML = "" + addition(+input1.value, +input2.value);
    input1.value = "";
    input2.value = "";
});
function subtraction(a, b) {
    return a - b;
}
// console.log(subtraction(6, 3));//3:number
elBtnMinuse.addEventListener("click", () => {
    val.innerHTML = "" + subtraction(+input1.value, +input2.value);
    input1.value = "";
    input2.value = "";
});
function multiplication(a, b) {
    return a * b;
}
// console.log(multiplication(2, 4)); //8:number
elBtnmultication.addEventListener("click", () => {
    val.innerHTML = "" + multiplication(+input1.value, +input2.value);
    input1.value = "";
    input2.value = "";
});
function division(a, b) {
    return a / b;
}
// console.log(division(12, 2)); //6
elBtnDivision.addEventListener("click", () => {
    val.innerHTML = "" + division(+input1.value, +input2.value);
    input1.value = "";
    input2.value = "";
});
function modulo(a, b) {
    return a % b;
}
// console.log(modulo(100, 10)); //0:number
// string type conversions;
function myString(s) {
    return s;
}
// console.log(myString("Abduhamidwebs"));
// myBooleanType conversions;
function myBoolean(s) { return s; }
// console.log(myBoolean(true));
