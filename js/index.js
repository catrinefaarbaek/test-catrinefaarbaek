




document.addEventListener("DOMContentLoaded", () => {

let count=30;
let countMin=0;
let countMax=10;



restrictCount();
updateCountText();

// console.log(countMax);

document.querySelector("#btn_increase").addEventListener("click", () => {
	count++;
	restrictCount();
	updateCountText();
	
});

document.querySelector("#btn_decrease").addEventListener("click", () => {
	count--;
	restrictCount();
	updateCountText();

});


function updateCountText(){
	document.querySelector("#text_count").innerHTML=count;
}

function restrictCount(){
	count++;
	if(count>countMax){
		count=countMax;
	}else 
	if(count<countMin){
		count=countMin;
	}
}




}); // DOMContentLoaded end!




























// document.addEventListener("DOMContentLoaded", () => {

// let count = 0;
// document.querySelector("#counter").innerHTML=count;

// document.querySelector("#btn_count_increase").addEventListener("click", taelOp);

// document.querySelector("#btn_count_decrease").addEventListener("click", taelNed);

// function taelOp(){
// 	count++
// 	if(count>20){
// 		count=20;
// 	}
// 	document.querySelector("#counter").innerHTML=count;
// 	console.log(count);
// };

// function taelNed(){
// 	count--
// 	if(count<0){
// 	count=0;		
// 	}
// document.querySelector("#counter").innerHTML=count;
// };

// console.log(count);
// })









// let count=0;

// let increase=count++;

// document.querySelector("#btn_count_increase").addEventListener("click", taelOp);

// function taelOp() {
// 	if (count>5){
// 		count=5;
// 	}else if{
// 		(count<5){
// 			increase;
// 		}
	
// }
// console.log(taelOp);


// omkranser indholdet for at sikre, at HTML'en er loadet først. 
//Egentlig en anonymous function.
// document.addEventListener("DOMContentLoaded", () => {
		
// 	let count = 0;

// 	let increase = count++;


// 	document.querySelector("#btn_count_increase").addEventListener("click", plusEn);
// 	console.log(plusEn);

// 	function plusEn(){
// 		if (count>5){
// 			count=5;
// 		}else{
// 			count++;
// 		}
// 	document.querySelector("#counter").innerHTML=count;

// 	console.log(count);
// 	}
// });













