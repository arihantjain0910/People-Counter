// document.getElementById("counter-el").innerText= 5;
// console.log("count");

// let count = 0;
// console.log(count);

// let MyAge = 23;
// let DogRatio = 7;
// let MyDogAge = MyAge * DogRatio;

// console.log(MyDogAge);

// let bonusPoint =50;
// bonusPoint = bonusPoint + 50;
// console.log(bonusPoint);

// bonusPoint = bonusPoint -25;
// console.log(bonusPoint);

// bonusPoint = bonusPoint+70;
// console.log(bonusPoint);

// function increment(){
//     console.log("The Button Is Clicked");
// }

// function number(){
//     console.log("42");
// }

// number();

// let lap1 =34;
// let lap2 = 33;
// let lap3 = 36;

// function lapSum(){
//     console.log(lap1+lap2+lap3);
// }

// lapSum();
let count =0;
let saveEl = document.getElementById("Entries");
function increment(){
count = count +1;
document.getElementById("counter-el").innerText= count;
}

function save(){
let countStr = count + " - "
// saveEl.innerText += countStr;
saveEl.textContent += countStr;
 document.getElementById("counter-el").innerText= 0;
 count =0;
}


// function save(){
//     console.log(count)
// }

// let message = "You have three notifications";
// console.log(message)

// let name = "Arihant ";
// let greeting = "Good morning"
// let MyGretting = name  + greeting ; 
// console.log(MyGretting)