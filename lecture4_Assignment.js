const prompt = require('prompt-sync')();
//console.log(max(2, -1, 8, 3));
//console.log(reverse());
//console.log(toUpperCase());
console.log(invert());



function max(...numbers){
    let result = -Infinity;
    for(let number of numbers){
        if(number > result) result = number;
    }
    return result;
}
function reverse(){
    let num = prompt(`Enter a number to be reversed: `);
    let ans = ``;
    for(i = num.length; i > 0; i--){
        if(num[i-1] === `-`)
            ans = '-' + ans;
        else
            ans += num[i-1];
    }
    return ans;
}
function toUpperCase(){
    let string = prompt(`Enter a string you want capitilized: `);
    let newString = ``;
    for(let i = 0; i < string.length; i++){
        let char = string.charCodeAt(i);
        if(char <= 122 && char >= 97)
            newString = newString + String.fromCharCode(char - 32);
        else
            newString = newString + string[i];
    }
    return newString;
}
function invert(){
    let string = prompt(`Enter a string you want capitilized: `);
    let newString = ``;
    for(let i = 0; i < string.length; i++){
        let char = string.charCodeAt(i);
        if(char <= 122 && char >= 97)
            newString = newString + String.fromCharCode(char - 32);
        else if(char <= 90 && char >= 65)
            newString = newString + String.fromCharCode(char + 32);
        else
            newString = newString + string[i];
    }
    return newString;
}