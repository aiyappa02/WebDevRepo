let num1 = Math.floor( Math.random()*10 + 1);
let num2 = Math.floor( Math.random()*10 + 1);

document.getElementById("v1").value = num1;
document.getElementById("v2").value = num2;

let ans =num1 + num2 ;
console.log(ans);

function jsGame() {
    let userans = document.getElementById("answer").value;
    console.log("user" + userans);
    if(userans == ans){
        alert(" Good job correct answer");
    }
    else {
        alert("correct answer is "+ans);
    }

}