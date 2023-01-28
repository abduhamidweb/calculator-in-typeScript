const val = document.querySelector("#result") as HTMLButtonElement;
const input1 = document.querySelector("#first") as HTMLInputElement;
const input2 = document.querySelector("#second") as HTMLInputElement;
const elBtnPluse = document.querySelector("#plus") as HTMLButtonElement
const elBtnmultication = document.querySelector("#multiplication") as HTMLButtonElement;
const elBtnMinuse = document.querySelector("#minus") as HTMLButtonElement;
const elBtnDivision = document.querySelector("#division") as HTMLButtonElement;
const elBtnClear = document.querySelector("#clear") as HTMLButtonElement;
elBtnClear.addEventListener("click", () => {
    val.innerHTML = "0";
})
// Calculator  automatic
function addition(a: number, b: number): number {
    return a + b;
}
// console.log(addition(12, 12));//24:number
elBtnPluse.addEventListener("click", () => {
    val.innerHTML = "" + addition(+input1.value, +input2.value);
    input1.value = ""
    input2.value = ""

})

function subtraction(a: number, b: number): number {
    return a - b;
}
// console.log(subtraction(6, 3));//3:number
elBtnMinuse.addEventListener("click", () => {
    val.innerHTML = "" + subtraction(+input1.value, +input2.value);
    input1.value = ""
    input2.value = ""
})
function multiplication(a: number, b: number): number {
    return a * b;
}
// console.log(multiplication(2, 4)); //8:number
elBtnmultication.addEventListener("click", () => {
    val.innerHTML = "" + multiplication(+input1.value, +input2.value);
    input1.value = ""
    input2.value = ""
})

function division(a: number, b: number): number {
    return a / b;
}
// console.log(division(12, 2)); //6
elBtnDivision.addEventListener("click", () => {
    val.innerHTML = "" + division(+input1.value, +input2.value);
    input1.value = ""
    input2.value = ""
})
function modulo(a: number, b: number): number {
    return a % b;
}
// console.log(modulo(100, 10)); //0:number

// string type conversions;
function myString(s: string): string {
    return s
}
// console.log(myString("Abduhamidwebs"));
// myBooleanType conversions;
function myBoolean(s: boolean): boolean { return s; }

// console.log(myBoolean(true));
